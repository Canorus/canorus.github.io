/*
---
description: Determines when the user is idle (not interacting with the page) so that you can respond appropriately.

license:
- MIT-style license

authors:
- Espen 'Rexxars' Hovlandsdal (http://rexxars.com/)

requires:
core/1.2.4:
- Class.Extras
- Element.Event

provides:
- IdleTimer

inspiration:
- Inspired by Nicholas C. Zakas' Idle Timer (http://yuilibrary.com/gallery/show/idletimer) Copyright (c) 2009 Nicholas C. Zakas, [YUI BSD](http://developer.yahoo.com/yui/license.html)
- Also inspired by Paul Irish's jQuery idleTimer (http://paulirish.com/2009/jquery-idletimer-plugin/) Copyright (c) 2009 Paul Irish, [MIT License](http://opensource.org/licenses/mit-license.php)
...
*/

IdleTimer = new Class({

	Implements: [Events, Options],
	
	options: {
		/*
		onStart: $empty,
		onStop: $empty,
		onIdle: $empty,
		onActive: $empty,
		onTimeoutChanged: $empty,
		*/
		timeout: 60000,
		events: ['mousemove', 'keydown', 'mousewheel', 'mousedown']
	},
	
	initialize: function(element, options) {
		this.setOptions(options);
		this.element = $(element);
		this.activeBound = this.active.bind(this);
		this.isIdle = false;
		this.started = false;
	},
	
	/**
	 * Stops any existing timeouts and removes the bound events
	 */
	stop: function() {
		$clear(this.timer);
		
		// Remove bound events
		for(var i in this.options.events) {
			this.element.removeEvent(this.options.events[i], this.activeBound);
		}
		this.bound = false;
		this.started = false;
		this.fireEvent('stop');
		return this;
	},
	
	/**
	 * Triggered when the user becomes active. May also be launched manually by scripts
	 * if implementing some sort of custom events etc. An example would be flash files
	 * which does not trigger the documents onmousemove event, you could have the flash
	 * call this method to prevent the idle event from being triggered.
	 */
	active: function() {
		$clear(this.timer);
		if(this.isIdle) this.fireEvent('active');
		this.isIdle = false;
		this.start();
	},
	
	/**
	 * Fired when the user becomes idle
	 */
	idle: function() {
		if(this.timer) $clear(this.timer); // If called manually, timer will have to be removed
		this.isIdle = true;
		this.fireEvent('idle');
	},
	
	/**
	 * Starts the timer which eventually will reach idle() if the user is inactive
	 */
	start: function() {
		this.timer = this.idle.delay(this.options.timeout, this);
		this.lastActive = $time();
		if(!this.bound) this.bind();
		this.started = true;
		return this;
	},
	
	/**
	 * Bind events to the element
	 */
	bind: function() {
		for(var i in this.options.events) {
		    // modified by Caleb Crane to do type checking
		    $type(this.options.events[i]) == "string" && this.element.addEvent(this.options.events[i], this.activeBound);
		}
		this.bound = true;
		this.fireEvent('start');
	},
	
	/**
	 * Returns how many seconds/milliseconds have passed since the user was last idle
	 */
	getIdleTime: function(returnSeconds) {
		return returnSeconds ? Math.round(($time() - this.lastActive) / 1000) : $time() - this.lastActive;
	},
	
	/**
	 * Sets the number of milliseconds is concidered "idle".
	 * Will also attempt to fix any difference in the old and new timeout values,
	 * unless you pass true as whenActive - in this case the new timeout will be
	 * in play the next time the user is active again.
	 */
	setTimeout: function(newTime, whenActive) {
		var old = this.options.timeout;
		this.options.timeout = newTime;
		
		if(whenActive) return this; // The developer wants to wait until the next time the user is active before setting the new timeout
		
		// In all cases, we need a new timer
		$clear(this.timer);
		
		// Fire a new timeout event
		this.fireEvent('timeoutChanged', newTime);
		
		// How much time has ellapsed since we were last active?
		var elapsed = this.getIdleTime();
		
		if(elapsed < newTime && this.isIdle) {
			// Set as active, cause the new "idle" time has not been reached
			this.fireEvent('active');
			this.isIdle = false;
		} else if(elapsed >= newTime) {
			// We've not reached the limit before, but with the new timeout, we now have.
			this.idle();
			return this;
		}
		
		// Set new timer
		this.timer = this.idle.delay(newTime - elapsed, this);
		return this;
	}

});

Element.Properties.idle = {

	set: function(options) {
		var idle = this.retrieve('idle');
		if (idle) idle.stop();
		return this.eliminate('idle').store('idle:options', options);
	},

	get: function(options) {
		if (options || !this.retrieve('idle')) {
			if (options || !this.retrieve('idle:options')) this.set('idle', options);
			this.store('idle', new IdleTimer(this, this.retrieve('idle:options')));
		}
		return this.retrieve('idle');
	}

};

Element.Events.idle = {
	onAdd: function(fn) {
		var global = this.get ? false : true;
		var idler = global ? window.idleTimer : this.get('idle');
		if(global && !idler) { idler = window.idleTimer = new IdleTimer(this); }		
		if(!idler.started) idler.start();
		idler.addEvent('idle', fn);
	}
};
Element.Events.active = {
	onAdd: function(fn) {
		(this.get ? this.get('idle') : window.idleTimer).addEvent('active', fn);
	}
};
---
layout: post
title: 1Password for Mac 6.3 changelog
published: false
---
1Password for Mac 6.3 is now available.

# 6.3 (build #630032)

1Password 6.3 : The Passion Project

TL;DR

We’ve added support for the Vivaldi, Brave and Opera Developer browsers
It’s now possible to anchor the Large Type window by simply dragging it
VoiceOver support is much improved
A slew of additional improvements and fixes
Spring has sprung and passion is in the air. The birds are feeling it, the bees are feeling it and we are too! We have heard from some very passionate users who have inspired us to make a few key improvements, especially in VoiceOver, Large Type and browser support. We’re really excited about the features we were able to include in this release and hope you are too!

You get extension support, and YOU get extension support, and YOU…
There are new browsers getting created all the time, each with their own niche to serve. 1Password 6.3 added support for three such browsers: Vivaldi, Brave and Opera Developer. Vivaldi aims to be the most customizable of browsers (and is it ever!), and Brave is focused on security and privacy. And Opera Developer is for those who love to live on the edge. These browsers now integrate with 1Password, enabling you to log in to websites with ease.

### Large Type

We love Large Type, and based on the feedback we’ve gotten, you do too! We received a lot of passionate pleas to anchor the Large Type window so that it doesn’t disappear so quickly. Now you can simply drag the window and it will transform itself into an anchored window that won’t disappear until you close it yourself or lock your vault.

### We hear you

Accessibility has always been important to us. VoiceOver support is a key tool in making 1Password more accessible to more users. That is why in version 6.3, we have made it easier to navigate when using VoiceOver.

We love hearing from you! To provide feedback or get in touch with us, please join us in our discussion forums, email support@agilebits.com, send a message to @1Password on Twitter, or leave a comment on Facebook and tell us about the newest tricks you’ve learned

## Full Changelog

### NEW

Added support for Brave web browser. {OPM-3896}
Added support for Vivaldi web browser. {OPM-3611}
Added support for Opera Developer web browser.
Added the ability to anchor the Large Type window. {OPM-3217}
Added the ability to click anywhere on the QR Code scanner window to drag it. {OPM-3531}
Adds the ability to switch between 1Password Accounts-only and 1Password Accounts and Local vaults. {OPM-3843, OPM-3958}
Added support for 1Password accounts that are frozen. {OPM-4052}
Added support for 1Password account device reauthorization. {OPM-3975}
Added the ability to start over without data in the case of lost or forgotten Master Password. {OPM-3965}
Added the ability to use the keyboard shortcut ⌘+0-9 on the numeric keypad to change vaults. {OPM-3915}
Added the ability to use the keyboard shortcut ⌘+O in 1Password mini to anchor item details without first displaying item details. {OPM-2407}
Added some basic support for improved identity filling and Login saving on Spanish sites. {BRAIN-166}

## IMPROVEMENTS

Lock on Sleep now takes into consideration display sleep and not just Mac sleep. {OPM-1160, OPM-3682, OPM-3934}
1Password is better able to recognize many registration forms and avoid them during Login filling. {BRAIN-203, BRAIN-171}
1Password now better handles pages where text fields magically transform into password fields. (Requires 1Password extension 4.5.6 or later.) {BRAIN-135}
Added a confirmation when you try to move an item to a vault that doesn’t let you move items out of it. {OPM-3817}
Better VoiceOver behavior when moving between the sidebar, item list and detail views. {OPM-3872}
Better VoiceOver item labels in 1Password mini. {OPM-4013}
Changed instructions in the first-run QR code reader for clarity. {OPM-4028}
Created Documents now receive the associated item's tags. {OPM-3942}
Better Fast User Switching support. {OPM-1772}
Improve clarity of view when vault access is suspended. {OPM-3916}
Improved Login title generation for some rare cases.
Improved recognition of credit card expiration date fields. {BRAIN-155}
Improved recognition of credit card number fields. {BRAIN-152}
Improved the import screen text for SplashID. {OPM-3985}
Improved username saving and login filling on many Citi log in pages {BRAIN-114}
Made the text in the All Vaults preference pane clearer. {OPM-3504}
Many improvements to VoiceOver in the item detail view, including labels, a better date picker and tab key behavior. {OPM-3963, OPM-3263, OPM-3053, OPM-3561}
Now filtering out current item, items in the Trash, and existing linked items when using the "Link Existing" reference picker. {OPM-3933, OPM-3869}
Changed Teams reference to Account in item details if in All Vaults. {OPM-4047}
Section titles now only show placeholder text while in edit mode. {OPM-273}
The 1Password Updater "Multiple Copies of 1Password" warning dialog has seen numerous improvements to make it more helpful and potentially less intrusive. {OPM-3669}
The Password Generator button is no longer called "unchecked checkbox" in VoiceOver. {OPM-1994}
The restore from backup prompt now warns that it resets the sync settings and that they might need to be re-enabled. {OPM-3988}
Updated the Access Control List for 1Password Accounts so that creating items doesn't require Reveal Password permission. {OPM-3993}
Search results appear more quickly in 1Password mini.
When copying or moving items, the Team or Family name is displayed, if applicable. {OPM-3893}
When the Autosave window appears it is smarter about picking the best item to update if multiple potential Logins exist. {OPM-3924, OPM-3583}
Improved the interaction with 1Password Extension for some unverified browsers.
When the iCloud login token expires during sync a notification is now shown. {OPM-3681}
Update the Empty 1Password Account Preferences window to refer to both Families and Teams. {OPM-4003}
Improved the clarity of the text in the New Vault window. {OPM-3508}
Copying or moving an item across vaults now copies the usage information as well. {OPM-3788}
Improved the Open & Fill feature by ensuring that we only attach URL arguments for HTTP and HTTPS URLs. {OPM-3809}
Replaced the "Incorrect mini Launched" dialog with the new "Multiple Copies" dialog to improve the experience when the wrong copy of 1Password mini is launched. {OPM-4026}
Improved the security checks around the "verify browser signature" feature to ensure that we're checking the on-disk and in-memory representations. {OPM-4056}
Improved Login saving to avoid some sites' decoy fields. {BRAIN-207}
Improved filling and autosubmit for Starbucks. {BRAIN-227}
Improved post-filling field focus for sites that hide the password field such as Google and Tumblr. {BRAIN-187}
Changed text mentions of 1Password for Teams to 1Password Account in the first run window. {OPM-3852}
Improved the wording of vault and Master Password prompts. {OPM-4064}
Updated our translations with the latest from our incredible translators on Crowdin.

## FIXED

Fixed a few layout issues with the first-run window that resulted in text being cropped. {OPM-3968}
Fixed an issue causing system slowdown when creating the attachments directory when TimeMachine is enabled. {OPM-3973}
Fixed an issue during saving a Login for a page with iframes that could cause open and fill to use the iframe URL rather than the real page.
Fixed an issue that caused 1Password to sometimes display the password generator for non-password fields. {OPM-3660}
Fixed an issue that caused errors when saving the previously used password. {OPM-3766}
Fixed an issue that caused incorrect icon size for Rich Icons displayed in the update login window. {OPM-4025}
Fixed an issue that caused incorrect item counts when importing 1pif containing Folders into Teams/Family vaults. {OPM-3954}
Fixed an issue that caused the main app to allow items from different vaults to reference each other. {OPM-4010}
Fixed an issue that could cause 1Password mini to consume a lot of memory. {OPM-3989}
Fixed an issue that could cause automatic sync to fail in the Mac App Store version of 1Password when another device modified an item in the vault. {OPM-3992}
Fixed an issue when calculating note field height when certain unicode characters are present. {OPM-3173, OPM-1642}
Fixed an issue where the 1Password mini menu would not be dismissed when using "Report an issue" for a website. {OPM-3285}
Fixed an issue where 1Password would generate invalid one-time passwords if the secret contained an "=". {OPI-3452}
Fixed an issue where 1Password would sometimes fill the username in search fields when the real sign-in form was in an iframe. {BRAIN-169}
Fixed an issue where Autosubmit would fail to work on some AT&T websites where the keyboard could not be used to submit the form. {BRAIN-93}
Fixed an issue where Identities with Serbian addresses would fill incorrectly. {BRAIN-89}
Fixed an issue where Login filling would fail on eBay when the entry in 1Password was very old.
Fixed an issue where filling of identities could fail for some identities with United Kingdom addresses.
Fixed an issue where iCloud data could not be reset in the AgileBits Store version. {OPM-3685}
Fixed an issue where imported password fields would sometimes show a password generation icon when they shouldn't. {OPM-3607}
Fixed an issue where modification date was displayed when creating a new item. {OPM-4012}
Fixed an issue where search results could be affected by speedy typing. {OPM-3944}
Fixed an issue where tags would disappear when slowly moving the mouse outside of their bubbles. {OPM-3590}
Fixed an issue where the change password window was not allowing certain characters. {OPM-3941}
Fixed an issue where the item detail view was not updating after modifying attachments on another syncing device. {OPI-2861}
Fixed an issue where the username was not correctly saved on fidelity.com. (Requires 1Password extension 4.5.6 or later). {BRAIN-104}
Fixed an issue where “show previously used passwords” was always allowed in 1Password for Teams and Families. {OPM-3932}
Fixed an issue with the layout of a label for the newsletter subscription field in some languages. {OPM-3833}
Fixed an issue where 1Password could possibly not prompt to create a Login if you had a password for that domain. {OPM-4060}
Fixed an issue where data loss could happen if editing an item while updating through the extension or syncing. {OPM-4011}
Fixed an issue where changes to an item being edited could be lost when minimizing the main window. {OPM-4051}
Fixed an issue in show web form details where password fields would not honor the Reveal Password permission for 1Password accounts. {OPM-3894}
Fixed a crash that could happen when Watchtower was disabled. {OPM-3964, OPM-3591}
1Password would fail to identify the username field for sites that use password fields for submitting the username. {BRAIN-242}
Can now properly fill Logins on tinkoff.ru {BRAIN-228}
Auto-submit now works on secure.ssa.gov login page. {BRAIN-140}
1Password would sometimes incorrectly split the phone number across multiple fields such as on sfballet.org. {BRAIN-170}
Login filling would fail on UBS.com in Safari. {BRAIN-99}
Resolved a crash that would cause Login filling to fail for sites with radio buttons in the form such as tsp.gov. {BRAIN-239}
Fixed one of the issues that caused slow unlocks from 1Password mini. {OPM-3829}
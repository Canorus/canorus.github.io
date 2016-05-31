---
layout: post
title: Alfred 3 Changelog
published: false
---
# Change Log

Please note that the Change Log covers all changes including Powerpack-only features. To enjoy all that Alfred has to offer, be sure to buy a Powerpack license. :)

# Alfred 3.0

## Build 652, Thursday 19th May

We've updated almost every aspect of Alfred for this huge release as you can see from this extensive change log.
While we've added many new features, there have also been numerous improvements under the hood, with extensive code analysis. As such, the downloadable file has been reduced in size by nearly 40% (less than 3MB at the point of release) and you will find Alfred to be faster than ever, with a tiny memory footprint.

## General Improvements

- Migration assistant to help transfer all settings from Alfred 2 to Alfred 3
- Move Alfred to OS X 10.9+ allowing Alfred to use newer OS X technologies
- Added version number into OS X status bar hat menu
- ⌘W to close the Alfred window at any point
- The LC_CTYPE environment variable is now set to en_US.UTF-8 by default
    ◦   Can be overridden per workflow in the new Workflow Variables
- Migrate Alfred's threading to GCD / Thread Pooling for higher performance
- Update selection list actioning framework to support actions when no items are visible (i.e. file navigation or iTunes transport)
- Removed native support for Growl (workflows can still use growlnotify if required)
- Updated help tab with link to Getting Started guide
- Updated Alfred's auto updater
- Improved, higher performance image caching
- Overhauled keyboard handling, now aware of DVORAK-QWERTY
    ◦   Higher performance key caching when switching keyboards
- Improved knowledge / learning with faster latching to keyword based items such as workflows

## Workflows

Workflows have received a significant upgrade in Alfred 3, with new "Getting Started" guides available from the + button, exploring many of the new abilities.

Overhaul to the workflow architecture

- Now allows arbitrary object layout and connection
- Chaining of objects of all types, including input objects
- Dynamic and scriptable workflow object configuration using JSON
- Ability to veto Alfred's window from closing in the connection configuration
    ◦   Useful for input chaining to prevent window from closing / flickering
- Improved script task handling, particularly in regards to stderr handling
- Placeholder titles are no longer required fields for filter inputs for better chaining / direct use flexibility
- Version number added to workflow (variables) config, shown in description field when editing a workflow
Brand new Workflow editor
- Better visual clarity of connections
    ◦   Assign colours to objects
    ◦   New object notes to clearly annotate your workflows
- Multi selection / reorganisation of objects
- Intelligent cut, copy and paste of multiple objects
    ◦   Strip pasted hotkey config only when necessary
- Copy and paste configuration between matching objects
    ◦   Removes the need to delete and re-add object when reusing
- Add objects using right-click on the canvas at the location for editing
    ◦   Insert objects before or after an object, with automatic reconfiguration of connections
    ◦   Replace a selected object with a different object without losing its connections
- Standardise the ⌘S shortcut for saving workflow configuration sheets
- Use arrow keys to move selected objects around the canvas (+shift for moving further)
- New "Open Workflow folder in Finder" button in every workflow configuration sheet, next to Save / Cancel buttons
- New "Open in Terminal" option on workflows popup menu
- Canvas zooming, contextually zooming on selected items. Also, supports Apple trackpad pinch to zoom gesture.
- You can now search by creator in the workflow list (at least the first name needs to be typed to match)
- Remember canvas location and zoom within a session (for e.g. switching between workflows / easier copy and paste)
Improved Debugging
- Make filtering debug output by selected object a selectable option
- Debug logging is now clearer with colours
- Timestamp added into debugger
- New alfred_debug=1 environment variable on scripts when the Alfred debugger is visible in preferences
- Close button added to debug view
Improved workflow import
- Now shows the workflow readme before importing
- When updating, option to not migrate settings, which helps 'reset' a workflow when importing.
- Intelligent workflow import when updating a workflow, migrating keywords, variables and hotkeys
    ◦   Variables are merged with variables a user may have changed or added
    ◦   Keywords are not migrated if the new version starts with a { as this assumes it contains a variable

## New Workflow objects

- Utilities
    ◦   Argument and Variables
        ▫︎  Modify or switch the current input argument being passed through the workflow
        ▫︎  Insert or update new variables into the workflow stream
    ◦   JSON Config
        ▫︎  Modify the flow of data through Alfred allowing for:
            ∙   Updated argument / variable replacement
            ∙   Dynamic configuration of connected objects
            ∙   Workflow variable insertion / configuration
        ▫︎  Button to tidy the written JSON
    ◦   Junction
        ▫︎  Merge connections, multiple in and out
        ▫︎  Also nice for keeping a workflow's connections tidy
    ◦   Filter
        ▫︎  Only continue if input matches / does not match string or regex
    ◦   Delay
        ▫︎  Schedule a workflow stream to continue execution after specified number of seconds
        ▫︎  Yields execution back to workflow
        ▫︎  Dynamic icon in workflow editor to hint specified seconds
    ◦   Transform
        ▫︎  Trim, upper, lower, camel, reverse, strip diacritics, strip non-alpha
    ◦   Replace
        ▫︎  Replace string / regex within input query with specified string
        ▫︎  Mode for "empty input" allowing for defaulting of arguments
    ◦   Debug
        ▫︎  Write text out to the Alfred workflow debugger
        ▫︎  Sensible default which shows input and all variables
        ▫︎  Debug info shown with default 'interesting information' selected in debugger
        ▫︎  Option to clear the debug log, useful for debug objects at beginning of workflow stream
- Outputs
    ◦   Write Text File
        ▫︎  Write the input to the specified text file
        ▫︎  Option to skip, overwrite or append if file already exists
        ▫︎  Option to create intermediate folders before writing file
        ▫︎  File can be written to absolute path, or relatively to workflow data folder or workflow folder itself

## Updated Workflow objects

- Triggers
    ◦   Hotkey
        ▫︎  Now shows the hotkey mode to the right hand side: simulate mod release, wait for mod release, pass through mods
- Inputs
    ◦   Script Filter
        ▫︎  Updated script output format for adding results into Alfred
            ∙   New JSON feedback format, easier to read and configure
            ∙   Updated XML feedback format for new mod features
            ∙   Legacy support for Alfred 2 XML format
        ▫︎  New ability to directly run external scripts of any type without the need to bootstrap
        ▫︎  Simplified query argument processing, allowing use of argv in place of {query} replacement
            ∙   When using argv, file lists (e.g. from an Action trigger) are passed as separate arguments
        ▫︎  New option for Alfred to filter the returned results
            ∙   Script is run once, Alfred subsequently filters as user types - extreme performance
        ▫︎  More result flexibility including separate control of validity, subtext and argument for modifiers
            ∙   Mod results no longer need a configured mod output connection, they pass out default connection instead
        ▫︎  New 'quicklookurl' XML tag / JSON property to override and provide a custom Quick Look for a result
    ◦   List Filter
        ▫︎  Simple configuration of items into Alfred's results
            ∙   Configure the title, subtitle, argument and icon for each result
            ∙   Intelligent inheritance of icon (workflow -> object -> item)
            ∙   Batch import CSV of items into list configuration for easy mass editing
    ◦   Dictionary Filter
        ▫︎  Access OS X's word lookup with a workflow object
        ▫︎  Configurable language settings
- Actions
    ◦   Open File
        ▫︎  Offers new text field to manually enter static file to open
            ∙   Easier to see full file path of dropped file
            ∙   Allows for filename variable replacement
            ∙   Allows for opening of a file which may not yet exist
        ▫︎  If not absolute path, treats file as relative to workflow
        ▫︎  If static file defined, this is now correctly passed out to the connected objects
        ▫︎  Now aware of relative paths, searches first in workflow's own folder, then the workflow's data folder
    ◦   Open URL
        ▫︎  Now defaults the search URL to {query} to work for passed in URLs
        ▫︎  Significantly improved URL encoding (see "Web Searches" section of change log)
    ◦   Reveal File in Finder
        ▫︎  Now aware of relative paths, searches first in workflow's own folder, then the workflow's data folder
    ◦   Browse in Alfred
        ▫︎  Now aware of relative paths, searches first in workflow's own folder, then the workflow's data folder
        ▫︎  The browsed path is now correctly passed out to the connected objects
    ◦   Run Script
        ▫︎  New ability to directly run external scripts of any type without the need to bootstrap
        ▫︎  Simplified query argument processing, allowing use of argv in place of {query} replacement
            ∙   When using argv, file lists (e.g. from an Action trigger) are passed as separate arguments
- Outputs
    ◦   Copy to Clipboard
        ▫︎  Option to mark the copied data as transient, preventing it from appearing in clipboard history apps (including Alfred)
    ◦   Large Type
        ▫︎  Now configurable large type text with query and variable substitution, consistent with other output objects

## Workflow environment variables

- Default environment variables set per workflow configuration sheet
- {var:varname} placeholders can be used in workflow object configuration text fields
- Can be set dynamically throughout a workflow
    ◦   Using Argument and Variable utility
    ◦   Using JSON (JSON utility, or JSON output from a script)
- Workflow variables are set as environment variables when running script objects
- Variable values are migrated when upgrading a workflow
- Readme moved to variables configuration for better contextual explanation of workflow setup
- The theme selected result background colour is now set as a script environment variable

## Clipboard History and Snippets

- Multimedia Clipboard
    ◦   Images
    ◦   File Lists
    ◦   Hex Colours
- Vastly improved Snippets with Auto Expansion
    ◦   Automatic snippet expansion into any OS X text field via the snippet's keyword
        ▫︎  maintains previous clipboard contents when using auto expansion
    ◦   cmd+s on a clipboard item in Alfred's clipboard history to quickly save snippet from a clipboard entry
    ◦   Snippet collections
    ◦   Export and Import collections
    ◦   Move snippets between collections
    ◦   New JSON file format
    ◦   Hotkey directly to snippets, toggle between clipboard and snippets viewers with respective hotkeys
    ◦   Snippets are no longer copied into clipboard history on use
    ◦   When adding a snippet into Alfred Remote, popup menu shows snippet collection hierarchy
- New option to "Load More" at bottom of clipboard history list to load next batch of history
    ◦   Helps find clipboard history data if you can't remember a part of it for searching
- Improved clipboard history performance, uses practically zero CPU
    ◦   Items pasted out of Alfred are marked as Alfred clipboard data; clipboard isn't re-processed by Alfred
- Added new option to move items to top of list when used from clipboard history (on by default as per v2 behaviour)
- Improved clipboard fast append matching algorithm
- Arbitrary date formatting with the {date:FORMAT} placeholder (using Unicode Technical Standard #35)
- When clearing the clipboard database, the database is now deleted then recreated
Theming and Appearance
- New Alfred 3 default themes
- Brand new theme editor
    ◦   Intuitive point and drag to change sizes, click for colour, right click for fonts
    ◦   Font mode to drag up/down through default fonts
    ◦   Change between theme mode and font mode with T and F
- Share themes on alfredapp.com directly from the theme editor
- Easy to read JSON file format
- When creating a new theme with the + button, base it on the default theme. Use duplicate theme menu to duplicate selected
- Use System font by default throughout Alfred (in views where theme fonts aren't applicable, e.g. Clipboard History preview)
- Arbitrary font selection from all installed fonts
- Undo / Redo support in the theme editor
- Intelligent shadow invalidation for more reliable theme transparency
- Improved logic on vertical alignment of fonts in the search field paving the way for non-standard 3rd party fonts
- Imports v2 Theme URLs and migrates theme to v3 (e.g. from Packal)

## File Search and Navigation

- Improved file actions (copy/move/delete) with success / fail notifications
- Abbreviate file path subtext (e.g. ~/ instead of /Users/andrew/)
- Abbreviate the iCloud Drive subtext file paths  (e.g. iCloud Drive/Pages/document1.doc)
- Bug Fix: When browsing an empty folder and backspacing on the folder (e.g. ~/Applications/) that it jumps up a folder.
- Improved layout for secondary views (FS Navigation / actions panel etc) with larger preview
- Now uses Quick Look panel to show preview of document
- Show full filename at bottom of FS Navigation view
- In areas where you configure user defined file types (default results, file filter workflow object), prefix type with + to search type tree
- Fix when typing a path into Alfred e.g. /Applications, then selecting all and typing a string (e.g. 'andrew')
    ◦   Now correctly returns to the default results instead of staying in the FS navigation mode with no results
- e.g. "public.folder" searches kMDItemContentType, "+public.directory" searches kMDItemContentTypeTree

## System Commands

- New Sleep Displays command with keyword "sleepdisplays", to sleep displays
    ◦   Also added for Alfred Remote
- Moved to using pmset for sleep command and new display sleep command
- Make the default eject scope "Local Mounted Volumes"
- Better organised "System Commands" Alfred Remote example page with new "Sleep Displays" command

## Contacts Integration

- More intelligent height truncation for long contact cards
- Updated Microsoft Outlook email attachment support

## Web Searches

- Make Amazon searcher https by default
- Updated Bing to use https and .com by default due to certificate inconsistency
- Updated Wunderground to be use https by default
- Added new default web search for Pinterest
- Unified custom web search sheet save button to use cmd+s
- Significantly improved URL encoding
    ◦   Add intelligent {query} encoding based on wether it's a URL parameter, or part of the URL string.
    ◦   Allow for flexible space encoding in {query}, e.g. - _ + /
    ◦   Applies to Custom Searches, Open URL workflow object and Remote Open URL

## Accessibility

- Improved Accessibility
- Alfred can now read the selected result using Voice Over
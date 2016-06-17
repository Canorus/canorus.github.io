---
layout: post
title: Alfred 3.0.2 Changelog
published: false
---

# Change Log

Please note that the Change Log covers all changes including Powerpack-only features. To enjoy all that Alfred has to offer, be sure to buy a Powerpack license. :)
Alfred 3.0.2

### Build 676, Tuesday 14th June 2016

## Corporate Licensing

- Alfred 3 corporate licensing now available
    - We will be rolling out updated corporate licenses to current corporate users in the coming days
    - If you are interested in corporate licensing for your business or team, please contact our info@ email address 

## General Improvements

- Recognise 'alfred3workflow' file extension in the same way as 'alfredworkflow' for installing workflows
    - Helps helper libraries such as Alfred-Workflow by Dean Jackson (deanishe) with features such as auto-update
- Fix intelligent selection list wrapping (in e.g. Clipboard History view), making it more predictable.
    - The wrapping from last item to first item and first item to last item will now only occur with a key press, not a repeated key hold.
- Only treat clipboard history image data as images if there isn't associated plain string data.
    - This allows copying from apps such as Numbers and Excel in the correct text version
- Prepend workflow folder to PYTHONPATH environment variable when running Python scripts
- In text service, reset buffered chars when characters typed with ctrl key down
    - Allows for e.g. ctrl+c terminal, then typing snippet.
    - Also helps expansion when using e.g. emacs bindings
- Always set the argument for a workflow dictionary filter, this allows 'not found' words to be processed in the same way as matching words
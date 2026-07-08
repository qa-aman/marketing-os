/**
 * Creates the "Claude Cowork workshop - pulse (before and after)" Google Form,
 * fully populated, and links a spreadsheet so every response is saved.
 * The SAME form is used before the workshop and again after, so you can compare
 * and see what the team learned. A "Before / After" question at the top keeps
 * both sets of answers in one sheet.
 *
 * HOW TO RUN (about 30 seconds):
 * 1. Sign in to Google as aman@shipwithai-labs.com (use the exact address for
 *    that account), so the form and responses live in that account.
 * 2. Go to https://script.google.com and click "New project".
 * 3. Delete the sample code, paste this whole file in.
 * 4. Click Run (the play icon). Choose createPulseForm if asked.
 * 5. Approve the permissions prompt the first time (it is your own account).
 * 6. Open the Execution log (or View > Logs). You will see three links:
 *      - the link to SHARE with the team
 *      - the link to EDIT the form
 *      - the RESPONSES spreadsheet where answers are saved
 *
 * Share the first link in the WhatsApp group before the workshop, then share the
 * same link again after the last session. Filter the sheet by the Before/After
 * column to compare.
 *
 * Want to track each person's own before-to-after change? Change the name field
 * below from setRequired(false) to setRequired(true), or set setCollectEmail(true).
 */
function createPulseForm() {
  var form = FormApp.create('Claude Cowork workshop - pulse (before and after)');

  form.setDescription(
    'A quick pulse for the Claude Cowork workshop. Same short questions before and ' +
    'after, so we can see how far the team has come. No right answers, nothing to ' +
    'prepare, just tap. Takes under a minute. Thank you.'
  );
  form.setCollectEmail(false);   // keep it low-friction and honest
  form.setProgressBar(true);
  form.setAllowResponseEdits(false);

  // When are they filling it in - this is what makes one form work for before and after
  form.addMultipleChoiceItem()
    .setTitle('Are you filling this in before or after the workshop?')
    .setChoiceValues([
      'Before the workshop',
      'After the workshop'
    ])
    .setRequired(true);

  // Optional name, so you can follow up on setup issues without forcing it
  form.addTextItem()
    .setTitle('Your name (optional)')
    .setRequired(false);

  // ---- The two that answer "do they already know this?" ----

  // Poll A - the gate
  form.addMultipleChoiceItem()
    .setTitle('Have you used Claude Cowork, the desktop agent that works with your files (not the Claude chat)?')
    .setChoiceValues([
      'Yes, I use it',
      'Tried it once or twice',
      'No, but I know what it is',
      'No, it is new to me'
    ])
    .setRequired(true);

  // Poll B - capability self-map, multi-select, mapped to the six sessions
  form.addCheckboxItem()
    .setTitle('Which of these can you already do in Claude Cowork today? Tick all that apply.')
    .setChoiceValues([
      'Give it a task on a folder and get a finished file back (Session 1)',
      'Set brand rules or a project it remembers (Session 2)',
      'Build a reusable skill (Session 3)',
      'Connect a tool like Gmail or Drive (Session 4)',
      'Build a live dashboard or schedule a task (Session 5)',
      'None of these yet'
    ])
    .setRequired(true);

  // ---- Readiness ----

  // Poll 1
  form.addMultipleChoiceItem()
    .setTitle('How often do you use an AI tool (ChatGPT, Claude, Gemini, Copilot) for work?')
    .setChoiceValues([
      'Every day',
      'A few times a week',
      'Now and then',
      'Almost never',
      'Never tried one'
    ])
    .setRequired(true);

  // Poll 2
  form.addMultipleChoiceItem()
    .setTitle('Have you used Claude before?')
    .setChoiceValues([
      'Yes, regularly',
      'Tried it a few times',
      'Heard of it, not used it',
      'New to me'
    ])
    .setRequired(true);

  // Poll 3
  form.addMultipleChoiceItem()
    .setTitle('When you get a new software tool, what suits you?')
    .setChoiceValues([
      'I dive right in on my own',
      'I am fine with a guide to follow',
      'I like someone to show me first',
      'I tend to avoid new tools'
    ])
    .setRequired(true);

  // Poll 4
  form.addMultipleChoiceItem()
    .setTitle('In the workshop you will install a desktop app. Can you install apps on your work laptop?')
    .setChoiceValues([
      'Yes, my own laptop, no restrictions',
      'Yes, but IT has to approve installs',
      'Only a shared or locked-down machine',
      'Not sure'
    ])
    .setRequired(true);

  // Poll 5
  form.addMultipleChoiceItem()
    .setTitle('What would make this workshop most useful for you?')
    .setChoiceValues([
      'Writing content faster (posts, emails, copy)',
      'Making decks and visuals',
      'Research and competitor analysis',
      'Automating repetitive tasks',
      'Just seeing what is possible'
    ])
    .setRequired(true);

  // ---- Save every response to a spreadsheet ----
  var ss = SpreadsheetApp.create('Cowork pulse - responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('SHARE THIS with the team: ' + form.getPublishedUrl());
  Logger.log('EDIT the form here:       ' + form.getEditUrl());
  Logger.log('RESPONSES spreadsheet:    ' + ss.getUrl());
}

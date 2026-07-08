/**
 * Creates TWO Google Forms for the Claude Cowork workshop, each with its own
 * linked responses spreadsheet:
 *   - createPreForm()   run this BEFORE the workshop  (readiness + starting point)
 *   - createPostForm()  run this AFTER the workshop   (what they learned + feedback)
 *
 * The gate question and the capability self-map are IDENTICAL in both forms, so you
 * can compare them and see how far the team moved. Everything else differs: the pre
 * form asks about readiness and setup, the post form asks for feedback. There is no
 * "before or after" toggle, because each form is its own thing with its own sheet.
 *
 * HOW TO RUN (about a minute):
 * 1. Sign in to Google as aman@shipwithai-labs.com (use the exact address).
 * 2. Go to https://script.google.com and click "New project".
 * 3. Delete the sample code, paste this whole file in.
 * 4. In the toolbar function dropdown, pick createPreForm, click Run, approve the
 *    permission prompt. Open the Execution log for the SHARE / EDIT / RESPONSES links.
 * 5. When you need the post survey, pick createPostForm from the same dropdown and Run.
 *
 * Share the pre link a few days before Session 1. Share the post link after the last
 * session. To compare, put the two responses sheets side by side and look at Poll B.
 *
 * The name field is required in both forms, so you can match each person's answers
 * before to after. To make it optional instead, edit addNameField below.
 */

// ---------- BEFORE the workshop ----------
function createPreForm() {
  var form = FormApp.create('Claude Cowork workshop - BEFORE');
  form.setDescription(
    'A quick pulse before the Claude Cowork workshop. We want to shape the sessions ' +
    'around where the team is starting from, so a few 10-second questions. No right ' +
    'answers, nothing to prepare, just tap. Under a minute. Thank you.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setAllowResponseEdits(false);

  addNameField(form);
  addLearningQuestions(form);   // Poll A + Poll B, identical to the post form

  // Readiness (before only)
  form.addMultipleChoiceItem()
    .setTitle('How often do you use an AI tool (ChatGPT, Claude, Gemini, Copilot) for work?')
    .setChoiceValues(['Every day', 'A few times a week', 'Now and then', 'Almost never', 'Never tried one'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Have you used Claude before?')
    .setChoiceValues(['Yes, regularly', 'Tried it a few times', 'Heard of it, not used it', 'New to me'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('When you get a new software tool, what suits you?')
    .setChoiceValues(['I dive right in on my own', 'I am fine with a guide to follow', 'I like someone to show me first', 'I tend to avoid new tools'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('In the workshop you will install a desktop app. Can you install apps on your work laptop?')
    .setChoiceValues(['Yes, my own laptop, no restrictions', 'Yes, but IT has to approve installs', 'Only a shared or locked-down machine', 'Not sure'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('What would make this workshop most useful for you?')
    .setChoiceValues(['Writing content faster (posts, emails, copy)', 'Making decks and visuals', 'Research and competitor analysis', 'Automating repetitive tasks', 'Just seeing what is possible'])
    .setRequired(true);

  linkSheet(form, 'Cowork pulse - BEFORE responses');
}

// ---------- AFTER the workshop ----------
function createPostForm() {
  var form = FormApp.create('Claude Cowork workshop - AFTER');
  form.setDescription(
    'A quick pulse now the workshop is done. The first questions match the ones from ' +
    'before, so we can see how far the team has come. The rest is your feedback, which ' +
    'shapes the next round. Under two minutes. Thank you.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setAllowResponseEdits(false);

  addNameField(form);
  addLearningQuestions(form);   // Poll A + Poll B, identical to the pre form

  // Feedback (after only)
  form.addMultipleChoiceItem()
    .setTitle('How confident do you feel using Claude Cowork for real work now?')
    .setChoiceValues(['Very, I can do it on my own', 'Somewhat, with a guide to follow', 'Not yet', 'Not sure'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('What will you use Cowork for first?')
    .setChoiceValues(['Writing content faster (posts, emails, copy)', 'Making decks and visuals', 'Research and competitor analysis', 'Automating repetitive tasks', 'Not sure yet'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Which sessions were most useful to you? Tick all that apply.')
    .setChoiceValues([
      'Session 1: meet Cowork, run a task',
      'Session 2: standing context and projects',
      'Session 3: skills and plugins',
      'Session 4: connect your tools',
      'Session 5: bigger outputs and automation',
      'Session 6: safety, sharing, next steps'
    ])
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('What was hardest or most confusing?')
    .setRequired(false);

  form.addScaleItem()
    .setTitle('How likely are you to recommend this workshop to a colleague?')
    .setBounds(0, 10)
    .setLabels('Not likely', 'Very likely')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Anything we should add or change next time?')
    .setRequired(false);

  linkSheet(form, 'Cowork pulse - AFTER responses');
}

// ---------- shared pieces (keep pre and post identical where it matters) ----------

// Name is required so you can match each person's answers before to after.
// To make it optional instead, set setRequired(false) and add " (optional)" to the title.
function addNameField(form) {
  form.addTextItem()
    .setTitle('Your name')
    .setRequired(true);
}

// Poll A (the gate) + Poll B (the capability self-map). These are the two questions
// you compare before vs after, so they must stay word-for-word identical in both forms.
function addLearningQuestions(form) {
  form.addMultipleChoiceItem()
    .setTitle('Have you used Claude Cowork, the desktop agent that works with your files (not the Claude chat)?')
    .setChoiceValues(['Yes, I use it', 'Tried it once or twice', 'No, but I know what it is', 'No, it is new to me'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Which of these can you already do in Claude Cowork today? Tick all that apply.')
    .setChoiceValues([
      'Give it a task on a folder and get a finished file back',
      'Set brand rules or a project it remembers',
      'Build a reusable skill',
      'Connect a tool like Gmail or Drive',
      'Build a live dashboard or schedule a task',
      'Share a skill with a teammate, or set connector access safely',
      'None of these yet'
    ])
    .setRequired(true);
}

// Create a spreadsheet and link the form to it, then log the three links.
function linkSheet(form, sheetName) {
  var ss = SpreadsheetApp.create(sheetName);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  Logger.log('SHARE THIS with the team: ' + form.getPublishedUrl());
  Logger.log('EDIT the form here:       ' + form.getEditUrl());
  Logger.log('RESPONSES spreadsheet:    ' + ss.getUrl());
}

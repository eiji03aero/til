import * as events from '/assets/js/events.mjs';

events.listen(events.Events.ModulesInitialized, async () => {
  const { initialize } = await import('/assets/js/main.mjs');
  await initialize();
});

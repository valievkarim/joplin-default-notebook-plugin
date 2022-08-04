import joplin from 'api';

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

joplin.plugins.register({
	onStart: async function() {

         await joplin.commands.register({
            name: "myCreateNote",
            label: "Create note in default notebook",
            execute: async () => {
                const folderId = "f33766bd730345e0a52c7dcf81200ccc";

                await joplin.commands.execute("openFolder", folderId);
                await sleep(100);
                await joplin.commands.execute('newNote');
                await sleep(500);

                await joplin.commands.execute("editor.focus");

//                 setTimeout( () => {
//                                 joplin.commands.execute('newNote');
//                 }, 200)


//                 const note = await joplin.data.post(["notes"], null, { body: "", parent_id: folderId, title: null, is_todo: 0 });
//                 await joplin.commands.execute("openNote", note.id);
//                 await joplin.commands.execute("editor.focus");
            }
        });

        await joplin.views.menus.create("new-note-notebook", "new-note-notebook", [
            {
                commandName: "myCreateNote",
                accelerator: "Alt+Shift+N"
            },
        ]);



		console.info('Hello world. Test plugin started!');
	},
});

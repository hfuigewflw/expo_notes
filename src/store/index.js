import Realm from "realm";
import { NoteSchema } from "./NoteSchema";

const migration = (oldRealm, newRealm) => {
  // Add the new 'date' property to all existing 'Note' objects
    const oldObjects = oldRealm.objects('Note');
    const newObjects = newRealm.objects('Note');

    for (let i = 0; i < oldObjects.length; i++) {
    newObjects[i].date = someDefaultValue; // replace with an appropriate default value
    }
}

// Then, in your Realm configuration:
const realm = new Realm({
    schema: [NoteSchema], // replace with your actual schema
    schemaVersion: 2, // increment this each time you change your schema
    migration,
});

export default realm;


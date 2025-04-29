import { observable } from "@legendapp/state";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { syncObservable } from "@legendapp/state/sync";

export interface VenueEvent {
  venue: string;
  email: string;
  start: string;
  end: string;
  date: string;
  purpose: string;
  mediaNeeded: "Yes" | "No";
  equipmentNeeded: string | undefined;
  remark: string;
}

interface User {
  name: string;
  email: string;
  password: string;
}

interface Storage {
  events: Array<VenueEvent>;
  isLoggedIn: boolean;
  user: User | null;

  users: Array<User>;

  login: (email: string, password: string) => boolean;
  logout: () => void;

  addEvent: (detail: VenueEvent) => void;
}

export const storage$ = observable<Storage>({
  events: [],
  isLoggedIn: false,
  user: null,
  users: [
    { email: "pann@apiu.edu", name: "Pekko", password: "hesoyam" },
    { email: "dan@apiu.edu", name: "Dan", password: "cannottell" },
    { email: "broset@apiu.edu", name: "Broset", password: "cannottell"},
    { email: "cssdir@apiu.edu", name: "Stanislav", password: "tempPassword"}
  ],

  login: (email: string, password: string) => {
    const users = storage$.users.get();
    const user = users.find(
      (user) => user.email == email && user.password == password
    );
    if (user) {
      storage$.user.set(user);
      storage$.isLoggedIn.set(true);
      return true;
    }
    return false;
  },
  logout: () => {
    storage$.user.set(null);
    storage$.isLoggedIn.set(false);
  },

  addEvent: (detail: VenueEvent) => {
    storage$.events.push(detail);
  },
});

syncObservable(storage$, {
  persist: {
    name: "pann-venue",
    plugin: ObservablePersistLocalStorage,
  },
});
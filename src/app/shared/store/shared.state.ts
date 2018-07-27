import { Store, State, Selector } from '@ngxs/store';
import { SharedStateModel } from './shared.model';

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    title: null
  }
})
export class SharedState {

  constructor() {
  }

  // selectors
  @Selector()
  static title(state: SharedStateModel) {
    return state.title;
  }

}

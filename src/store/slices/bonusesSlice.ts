import {createSlice} from '@reduxjs/toolkit';
import {BONUSES} from '../../mocks/data';

type BonusesState = {
  bonuses: Array<(typeof BONUSES)[0]>;
};

const initialState: BonusesState = {
  bonuses: BONUSES,
};

export const bonusesSlice = createSlice({
  name: 'bonuses',
  initialState,
  reducers: {
    checkBonus(state) {
      const nextBonus = state.bonuses.find(bonus => !bonus.completed);
      if (nextBonus) {
        nextBonus.completed = true;
      }
    },
    resetBonuses(state) {
      state.bonuses = state.bonuses.map(bonus => ({
        ...bonus,
        completed: false,
      }));
    },
  },
});

export const {checkBonus, resetBonuses} = bonusesSlice.actions;

export const selectBonuses = (state: {bonuses: BonusesState}) =>
  state.bonuses.bonuses;

export default bonusesSlice.reducer;

import { GetterTree, ActionTree, MutationTree } from "vuex";
import { selectFiles } from "../types/typing";
export const state = () => ({
  SourceFile: [
    {
      path: "/_CMS_NEWS_IMG_/cms_images/fck/2018-08/21/567d1696-22a3-4086-a70c-41e205b3aa44.png",
      name: "1572055868193banner01-pc.jpg",
      filetype: "img"
    }
  ] as selectFiles[],
  name: "ladis",
  localUrl: '',
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  getFiles: state => (isImg: boolean) => {
    const files = state.SourceFile;
    return files
      .filter(el => (el.filetype === "img") === isImg)
      .map(el => ({ title: el.name, value: el.path, url: el.path }));
  }
};

export const mutations: MutationTree<RootState> = {
  SET_SOURCE_FILE: (state, payload: selectFiles) => {
    state.SourceFile.push(payload as never);
  },
  SETHOST(state, payload) {
    state.localUrl = payload.localUrl
  }
};
export const actions: ActionTree<RootState, RootState> = {
  set_user: (state, payload) => {
    console.log('set_user');

  },
  nuxtServerInit({ commit }, { req }) {
    const forwardedHost = req.headers['x-forwarded-host']
    let host
    try {
      host = req.headers.host.split(':')[0]
    } catch (error) {
      console.log({ host: req.headers.host })
    }
    commit('SETHOST', { localUrl: forwardedHost || host })
  }
}


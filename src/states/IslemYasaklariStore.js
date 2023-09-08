import { create } from "zustand";

const useIslemYasaklariStore = create((set) => ({
  users: [],
  isVerifyLogin: false,
  changeIsVerifyLogin: (x) => set(() => ({ isVerifyLogin: x })),
  //changeIsVerifyLogin2: () => {set((state) => ({isVerifyLogin:!stateIsverifyLogin}))},
  fetchData: async () => {
    try {
      const response = await fetch("http://localhost:8080/api/get-db", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!response.ok) {
        const response2 = await fetch(
          "http://localhost:8080/api/auth/refreshToken",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },

            body: JSON.stringify({
              refreshToken: localStorage.getItem("refreshToken"),
            }),
          }
        );

        if (response2.ok) {
          const data2 = await response2.json();
          localStorage.setItem("accessToken", `${data2.accessToken}`);
          console.log(localStorage.getItem("accessToken"));

          set({ fetchData: useIslemYasaklariStore.getState().fetchData }); //Bu daha iyi
          //useIslemYasaklariStore.getState.fetchData();
          //this.fetchData(); //ÖNEMLİ !!
        } else {
          set({ isVerifyLogin: false });
        }
      } else {
        set({ isVerifyLogin: true });
        const data = await response.json();
        set({ users: data });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ isVerifyLogin: false });
    }
  },
}));

export default useIslemYasaklariStore;

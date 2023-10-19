"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={<div className="text-center mt-20">loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;

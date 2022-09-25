import { db } from "../../../db/db";

export const getAllItems = () => {
  try {
    return db;
  } catch (error) {
    console.log("getAllItem error", error);
  }
};

export const getItem = (id: number) => {
  try {
    return db.filter((item) => item.id === id)[0];
  } catch (error) {
    console.log("getItem error", error);
  }
};

export const editId = (id: number, item: { id: number; name: string }) => {
  try {
    const index = db.findIndex((item) => item.id === id);

    db[index] = item;

    return db[index];
  } catch (error) {
    console.log("editItem error", error);
  }
};

export const addItem = (item: { id: number; name: string }) => {
  try {
    db.push(item);

    return item;
  } catch (error) {
    console.log("addItem error", error);
  }
};

export const deleteItem = (id: number): void => {
  try {
    const index = db.findIndex((item) => item.id === id);

    db.splice(index, 1);
  } catch (error) {
    console.log("deleteItem error", error);
  }
};

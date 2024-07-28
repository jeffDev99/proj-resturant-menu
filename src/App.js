import React, { useState } from "react";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import menu from "./data";

let allCategories = ["all", ...new Set(menu.map((menumItem) => menumItem.category))];

function App() {
  const [menuList, setMenuList] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (categoryTitle) => {
    if (categoryTitle === "all") {
      setMenuList(menu);
      return
    }
    let filteredMenus = menu.filter(menu=>menu.category === categoryTitle)
    setMenuList(filteredMenus);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterCategory={filterCategory}/>
        <Menu menus={menuList} />
      </section>
    </main>
  );
}

export default App;

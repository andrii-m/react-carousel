const categories = {
  category: "UTRUSTNING",
  subCategories: [
    {
      category: "LJUD",
      subCategories: [
        { category: "Linearray" },
        { category: "Högtalare" },
        { category: "Mixerbord" },
        { category: "Mikrofoner" },
        { category: "Ljudstativ" },
        { category: "Övrigt" },
      ],
    },
    {
      category: "LJUS",
      subCategories: [
        { category: "Ljusbord" },
        { category: "Signalhantering" },
        { category: "Moving Heads" },
        { category: "Ramper" },
        { category: "PAR" },
        { category: "Rökmaskiner" },
        { category: "Övrigt" },
      ],
    },
    {
      category: "RIGGING",
      subCategories: [
        { category: "Stativ" },
        { category: "Truss" },
        { category: "Ground Support" },
        { category: "Rigging" },
      ],
    },
    {
      category: "KABEL",
      subCategories: [
        { category: "UPS" },
        { category: "Strömkabel" },
        { category: "Ljudkabel" },
        { category: "Övrig kabel" },
        { category: "Kabeltillbehör" },
      ],
    },
    {
      category: "ÖVRIGT",
      subCategories: [
        { category: "Kom-radio" },
        { category: "Tyger" },
        { category: "Test" },
        { category: "Övrigt" },
      ],
    },
  ],
};

export const categoryByQualifiedName = {};

function initCategories(category, parents = []) {
  category.parents = parents;
  category.qualifiedName = [...parents, category.category].join(" > ");
  categoryByQualifiedName[category.qualifiedName] = category;
  if (!category.subCategories) return;
  category.subCategories.forEach((subCat) => {
    initCategories(subCat, [...parents, category.category]);
  });
}
initCategories(categories);

export default categories;

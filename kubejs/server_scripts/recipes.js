// Recipes
onEvent("recipes", recipe => {

  // The One Probe doesn't need crafting
  recipe.remove({ output: "theoneprobe:probenote" });
  recipe.remove({ output: "theoneprobe:probe" });
  recipe.remove({ input: "theoneprobe:probe" });

  // Copper to Iron
  recipe.shapeless('minecraft:iron_ingot', [
    Item.of('projecte:philosophers_stone').ignoreNBT(),
    'minecraft:copper_ingot',
    'minecraft:copper_ingot'
  ]).keepIngredient('projecte:philosophers_stone');

  // Iron to Copper
  recipe.shapeless('2x minecraft:copper_ingot', [
    Item.of('projecte:philosophers_stone').ignoreNBT(),
    'minecraft:iron_ingot'
  ]).keepIngredient('projecte:philosophers_stone');

  // Quark Backpack more easily craftable (as per Bliss)
  //  - not needed because it is the default
  // recipe.remove({ output: "quark:backpack" });
  // recipe.shaped('quark:backpack', [
  //     'LIL',
  //     'LCL',
  //     'LIL'
  // ], {
  //     L: 'minecraft:leather',
  //     I: 'minecraft:iron',
  //     C: 'minecraft:chest'
  // });
});

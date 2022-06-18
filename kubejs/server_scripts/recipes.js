// Recipes
onEvent("recipes", recipe => {

  // The One Probe doesn't need crafting
  recipe.remove({ output: "theoneprobe:probe" });
  recipe.remove({ input: "theoneprobe:probe" });

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

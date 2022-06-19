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

  // Unify Ropes to use Supplementaries Rope
  recipe.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope');
  recipe.replaceInput({}, 'quark:rope', 'supplementaries:rope');
  recipe.remove({ output: "farmersdelight:rope" });
  recipe.remove({ output: "quark:rope" });

  // More sensible Rope and Nail recipe
  recipe.shapeless('2x comforts:rope_and_nail', [
    'supplementaries:rope',
    'supplementaries:rope',
    'minecraft:iron_nugget',
    'minecraft:iron_nugget'
  ]);

  // Craftable Gilded Blackstone
  recipe.shapeless('minecraft:gilded_blackstone', [
    'minecraft:blackstone',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget'
  ]);

  // Craftable mushroom blocks
  recipe.shaped('minecraft:red_mushroom_block', [
    'MMM',
    'MMM',
    'MMM'
  ], {
    M: 'minecraft:red_mushroom'
  });
  recipe.shaped('minecraft:brown_mushroom_block', [
    'MMM',
    'MMM',
    'MMM'
  ], {
    M: 'minecraft:brown_mushroom'
  });
});

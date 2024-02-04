am5.ready(function () {
  var root = am5.Root.new("chartdiv");
  root.setThemes([am5themes_Animated.new(root)]);

  var data = {
    value: 0,
    children: [
      {
        name: "Programming",
        color: "#ff0000",
        children: [
          {
            name: "Code",
            value: 60,
            color: "#ff0000",
          },
          {
            name: "Debug",
            color: "#ff0000",
            value: 40,
          },
        ],
      },
    ],
  };

  var container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout,
    })
  );

  var series = container.children.push(
    am5hierarchy.ForceDirected.new(root, {
      singleBranchOnly: false,
      downDepth: 2,
      topDepth: 1,
      initialDepth: 1,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      idField: "name",
      linkWithField: "linkWith",
      manyBodyStrength: -10,
      centerStrength: 0.25,
    })
  );

  series.get("colors").setAll({
    step: 2,
  });

  series.links.template.set("strength", 0.9);
  series.data.setAll([data]);
  series.set("selectedDataItem", series.dataItems[0]);
  series.appear(1000, 100);
});

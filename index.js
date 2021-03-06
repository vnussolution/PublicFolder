const locationList = window.frameElement.locationList || top.itemList;

// const chartSeries = { line: [], stockout: [], parValue: [], lineExt: [], inventoryTurn: [], binCount: [], parItemCount: [] };
 const locationNameList = [];
 const yAxisData = [];
 const legendData = ['Baseline', 'Recommended', 'Impact'];
 const seriesData = [];

 const baselineData = [];
 const recData = [];
 const impactData = [];
 const lineData = { Baseline: [], Recommended: [], Impact: [] };
 const stockoutData = { Baseline: [], Recommended: [], Impact: [] };
 const parValueData = { Baseline: [], Recommended: [], Impact: [] };
 const lineExtData = { Baseline: [], Recommended: [], Impact: [] };
 const inventoryTurnData = { Baseline: [], Recommended: [], Impact: [] };
 const binCountData = { Baseline: [], Recommended: [], Impact: [] };
 const parItemCountData = { Baseline: [], Recommended: [], Impact: [] };


 const maxCubeData = { Baseline: [], Recommended: [], Impact: [] };
 const avblCubeData = { Baseline: [], Recommended: [], Impact: [] };
 const effCubeData = { Baseline: [], Recommended: [], Impact: [] };


 

 const detailsStackedSeries = { par_item: [], par_item_removed: [], par_item_added: [], new_inv_value: [], dim_constraint_alert: [], expected_line: [] };

 const detailsLocation = { par_item: [], par_item_removed: [], par_item_added: [], new_inv_value: [], dim_constraint_alert: [], expected_line: [] };
 const detailsProperty = ['PAR Items', 'PAR Items Removed', 'PAR Items Added', 'New Inv. Value', 'Dim. Constrant Alerts', 'Expected Lines'];

 //abc class
 const abcClass = ['A', 'B', 'C', 'D'];

 const abcLocation = { A: [], B: [], C: [], D: [] };  
 const abcLocationSeries = { A: [], B: [], C: [], D: [] };

 const overviewPropertyList = ['Lines', 'Stockouts', 'PAR Value', 'Line Ext.', 'Turns', 'Bin Count', 'PAR Items'];
 const overviewPropertyIdList = ['_lines_pct_change', '_stockouts_pct_change', '_par_value_pct_change', '_line_ext_pct_change', '_turns_pct_change', '_bin_count_pct_change', '_par_item_pct_change'];
 const overviewPercentageChartList = [];

 const chartList = [
   
 //'lineBarChartOption', 'stockoutBarChartOption', 'parValueBarChartOption','lineExtBarChartOption','inventoryTurnBarChartOption','binCountBarChartOption','parItemBarChartOption',

// 'parItemStackedChartOption', 'parItemRemovedStackedChartOption', 'parItemAddedStackedChartOption','newInvValueStackedChartOption','dimConstraintAlertStackedChartOption','expectedLineStackedChartOption',
  // 'abcClassA_PieChartOption', 'abcClassB_PieChartOption'

 ];

 
 const overviewChartSeries = [{name:'Lines',chart:[]},{name:'Stockouts',chart:[]},{name:'PAR Value',chart:[]},{name:'Line Ext',chart:[]},{name:'Inventory Turns',chart:[]},{name:'Bin Count',chart:[]},{name:'PAR Item Count',chart:[]}, ]
 const detailsChartSeries = [{name:'PAR Items', chart:[]},{name:'PAR Items Removed', chart:[]},{name:'PAR Items Added', chart:[]},{name:'New Inv. Value', chart:[]},{name:'Dim. Constraint Alerts', chart:[]},{name:'Expected Lines', chart:[]}]
 const abcChartSeries = [{name:'Class A',chart:[]},{name:'Class B',chart:[]},{name:'Class C',chart:[]},{name:'Class D',chart:[]}];
 const storageInsightsChartSeries = [{name:'Max Cube',chart:[]},{name:'AVBL Cube',chart:[]},{name:'EFF Cube',chart:[]}];


 //storage insights
 const storageInsightsChartList = [];


 const storageInsightsPercentageChartList = [];



 function createSeries(legend, data) {
   return {
     name: legend,
     type: 'bar',
     label: { show: true, position: 'inside' },
     emphasis: { focus: 'series' },
     data
   }
 }

 function createChartOption(title, legendData, locationNameList, chartSeries) {
   return {
     title: {
       text: title,

     },
     tooltip: {
       trigger: 'axis',
       axisPointer: {
         type: 'shadow'
       }
     },
     legend: {
       data: legendData
     },
     grid: {
       left: '3%',
       right: '4%',
       bottom: '10%',
       containLabel: true
     },
     xAxis: [
       {
         type: 'value'
       }
     ],
     yAxis: [
       {
         type: 'category',
         axisTick: {
           show: false
         },
         data: locationNameList
       }
     ],
     series: chartSeries,
     barWidth: "25%",
     barGap: '0%'

   }
 }

 function createDetailsStackedSeries(legend, propertyList, index) {
   return {
     name: legend,
     type: 'bar',
     stack: 'total',
     label: {
       show: true
     },
     emphasis: {
       focus: 'series'
     },
     data: [propertyList[index]]
   }
 }


 function createDetailsStackedChartOption(title, chartSeries) {

   return {
     title: {
       text: '',

     },
     tooltip: {
       trigger: 'axis',
       axisPointer: {
         // Use axis to trigger tooltip
         type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
       }
     },
     legend: {},
     grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
     },
     xAxis: {
       type: 'value'
     },
     yAxis: {
       type: 'category',
       data: [title]
     },
     series: chartSeries
   }

 }


 function createAbcClassPieChartOption(title, data) {
   return {
     title: {
       text: title,

     },
     tooltip: {
       trigger: 'item'
     },
     legend: {
       top: '5%',
       left: 'center'
     },
     series: [
       {
         name: 'Access From',
         type: 'pie',
         radius: ['40%', '70%'],
         avoidLabelOverlap: false,
         itemStyle: {
           borderRadius: 10,
           borderColor: '#fff',
           borderWidth: 2
         },
         label: {
           show: false,
           position: 'center'
         },
         emphasis: {
           label: {
             show: true,
             fontSize: '40',
             fontWeight: 'bold'
           }
         },
         labelLine: {
           show: false
         },
         data
       }
     ]
   }
 }

 function createPercentageChartOption(title, data) {

   return {
     title: {
       text: title,

     },
     tooltip: {
       trigger: 'axis',
       axisPointer: {
         type: 'shadow'
       }
     },
     legend: {
       // data: ['Profit', 'Expenses', 'Income']
     },
     grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
     },
     xAxis: [
       {
         type: 'value'
       }
     ],
     yAxis: [
       {
         type: 'category',
         axisTick: {
           show: false
         },
         data: overviewPropertyList
       }
     ],
     series: [

       {
         //name: 'Income',
         type: 'bar',
         stack: 'Total',
         label: {
           show: true
         },
         emphasis: {
           focus: 'series'
         },
         data
       },

     ]
   };
 }



 for (const [index, location] of locationList.entries()) {

   ///////overview
   lineData.Baseline.push(location._baseline_lines);
   lineData.Recommended.push(location._practical_lines);
   lineData.Impact.push(location._practical_lines_change);

   stockoutData.Baseline.push(location._baseline_stockouts);
   stockoutData.Recommended.push(location._practical_stockouts);
   stockoutData.Impact.push(location._practical_stockouts_change);

   parValueData.Baseline.push(location._baseline_par_value);
   parValueData.Recommended.push(location._practical_par_value);
   parValueData.Impact.push(location._practical_par_value_change);

   lineExtData.Baseline.push(location._baseline_line_ext);
   lineExtData.Recommended.push(location._practical_line_ext);
   lineExtData.Impact.push(location._practical_line_ext_change);

   inventoryTurnData.Baseline.push(location._baseline_inventory_turns);
   inventoryTurnData.Recommended.push(location._practical_inventory_turns);
   inventoryTurnData.Impact.push(location._turns_change);

   binCountData.Baseline.push(location._baseline_bin_count);
   binCountData.Recommended.push(location._practical_bin_count);
   binCountData.Impact.push(location._practical_bin_count_change);

   parItemCountData.Baseline.push(location._baseline_par_item);
   parItemCountData.Recommended.push(location._recommended_par_item);
   parItemCountData.Impact.push(location._par_item_change);

   ////storage insights
   maxCubeData.Baseline.push(location._baseline_max_vol);
   maxCubeData.Recommended.push(location._practical_max_vol);
   maxCubeData.Impact.push(location._practical_max_vol_change);

   avblCubeData.Baseline.push(location._baseline_bin_id_vol);
   avblCubeData.Recommended.push(location._practical_bin_id_vol);
   avblCubeData.Impact.push(location._practical_bin_id_vol_change);

   effCubeData.Baseline.push(location._baseline_used_vol);
   effCubeData.Recommended.push(location._practical_used_vol);
   effCubeData.Impact.push(location._practical_used_vol_change);


   //////details 
   detailsLocation.par_item.push(location._total_number_par_item);
   detailsLocation.par_item_removed.push(location._remove_par_rec_rollup);
   detailsLocation.par_item_added.push(location._add_par_rec_rollup);
   detailsLocation.new_inv_value.push(location._new_value);
   detailsLocation.dim_constraint_alert.push(location._dim_constraint_alert_rollup);
   detailsLocation.expected_line.push(location._baseline_calculated_lines);


   //////ABC class
   // abcLocation.A.push({ value: location._class_abc_a, name: location.keyed_name });
   // abcLocation.B.push({ value: location._class_abc_b, name: location.keyed_name });
   // abcLocation.C.push({ value: location._class_abc_c, name: location.keyed_name });
   // abcLocation.D.push({ value: location._class_abc_d, name: location.keyed_name });

   abcChartSeries[0].chart.push({ value: location._class_abc_a, name: location.keyed_name });
   abcChartSeries[1].chart.push({ value: location._class_abc_b, name: location.keyed_name });
   abcChartSeries[2].chart.push({ value: location._class_abc_c, name: location.keyed_name });
   abcChartSeries[3].chart.push({ value: location._class_abc_d, name: location.keyed_name });
   //abcLocation.na.push(location._na_abc_rollup_ac);


   //percentage

   const overviewData = [];
   overviewPropertyIdList.forEach(i => overviewData.push(location[i]));
   overviewPercentageChartList.push({ name: '% Change for '+location.keyed_name, data: overviewData });

   ///storage insights
   //storageInsightsChartList.push({name:});

   locationNameList.push(location.keyed_name);
 }
 debugger;

 // details - stacked series
 locationNameList.forEach((name, index) => {

   detailsChartSeries[0].chart.push(createDetailsStackedSeries(name, detailsLocation.par_item, index)); 
   detailsChartSeries[1].chart.push(createDetailsStackedSeries(name, detailsLocation.par_item_removed, index)); 
   detailsChartSeries[2].chart.push(createDetailsStackedSeries(name, detailsLocation.par_item_added, index)); 
   detailsChartSeries[3].chart.push(createDetailsStackedSeries(name, detailsLocation.new_inv_value, index)); 
   detailsChartSeries[4].chart.push(createDetailsStackedSeries(name, detailsLocation.dim_constraint_alert, index)); 
   detailsChartSeries[5].chart.push(createDetailsStackedSeries(name, detailsLocation.expected_line, index)); 

 });


 //Pie series



 //console.log('data ==> ', lineData, stockoutData, parValueData, lineExtData, inventoryTurnData, binCountData, parItemCountData)
 for (let i of legendData) {
   //overview
   const lineSeries = createSeries(i, lineData[i]);
   const stockoutSeries = createSeries(i, stockoutData[i]);
   const parValueSeries = createSeries(i, parValueData[i]);
   const lineExtSeries = createSeries(i, lineExtData[i]);
   const inventoryTurnSeries = createSeries(i, inventoryTurnData[i]);
   const binCountSeries = createSeries(i, binCountData[i]);
   const barItemCountSeries = createSeries(i, parItemCountData[i]);

   const maxCubeSeries = createSeries(i, maxCubeData[i]);
   const avblCubeSeries = createSeries(i, avblCubeData[i]);
   const effCubeSeries = createSeries(i, effCubeData[i]);


   //console.log('==>', lineSeries, stockoutSeries, parValueSeries, lineExtSeries, inventoryTurnSeries, binCountSeries, barItemCountSeries, i)

   // chartSeries.line.push(lineSeries);
   // chartSeries.stockout.push(stockoutSeries);
   // chartSeries.parValue.push(parValueSeries);
   // chartSeries.lineExt.push(lineExtSeries);
   // chartSeries.inventoryTurn.push(inventoryTurnSeries);
   // chartSeries.binCount.push(binCountSeries);
   // chartSeries.parItemCount.push(barItemCountSeries);


   overviewChartSeries[0].chart.push(lineSeries);
   overviewChartSeries[1].chart.push(stockoutSeries);
   overviewChartSeries[2].chart.push(parValueSeries);
   overviewChartSeries[3].chart.push(lineExtSeries);
   overviewChartSeries[4].chart.push(inventoryTurnSeries);
   overviewChartSeries[5].chart.push(binCountSeries);
   overviewChartSeries[6].chart.push(barItemCountSeries);

   storageInsightsChartSeries[0].chart.push(maxCubeSeries);
   storageInsightsChartSeries[1].chart.push(avblCubeSeries);
   storageInsightsChartSeries[2].chart.push(effCubeSeries);

 }


 //const detailsProperty = ['PAR Items', 'PAR Items Removed', 'PAR Items Added', 'New Inv. Value', 'Dim. Constrant Alerts', 'Expected Lines'];
 const app = Aras.createApp({

   data() {
     const overviewPercentageChartListOption = [];
     const overviewChartListOption = [];
     const detailsListOption = [];
     const abcListOption = [];
     const storageInsightsListOption = [];


     overviewPercentageChartList.forEach(i => overviewPercentageChartListOption.push({ name: i.name, option: createPercentageChartOption(i.name, i.data) }));

     overviewChartSeries.forEach(i=> overviewChartListOption.push({name:i.name, option: createChartOption(i.name, legendData, locationNameList, i.chart) }));
     detailsChartSeries.forEach(i=> detailsListOption.push({name:i.name, option: createDetailsStackedChartOption(i.name, i.chart) }));
     abcChartSeries.forEach(i=> abcListOption.push({name:i.name, option: createAbcClassPieChartOption(i.name, i.chart) }));
     //storageInsightsChartSeries.forEach(i=> storageInsightsListOption.push({name:i.name, option: createChartOption(i.name,legendData, locationNameList, i.chart) }));

debugger;

     return {

       // overview
       // lineBarChartOption: createChartOption('Line Bar Chart', legendData, locationNameList, chartSeries.line),
       // stockoutBarChartOption: createChartOption('Stockout Bar Chart', legendData, locationNameList, chartSeries.stockout),
       // parValueBarChartOption: createChartOption('PAR Value Bar Chart', legendData, locationNameList, chartSeries.parValue),
       // lineExtBarChartOption: createChartOption('Line Ext Bar Chart', legendData, locationNameList, chartSeries.lineExt),
       // inventoryTurnBarChartOption: createChartOption('Inventory Turn Bar Chart', legendData, locationNameList, chartSeries.inventoryTurn),
       // binCountBarChartOption: createChartOption('Bin Count Bar Chart', legendData, locationNameList, chartSeries.binCount),
       // parItemBarChartOption: createChartOption('PAR Item Count Bar Chart', legendData, locationNameList, chartSeries.parItemCount),

       //details
       // parItemStackedChartOption: createDetailsStackedChartOption('PAR Items', detailsStackedSeries.par_item),
       // parItemRemovedStackedChartOption: createDetailsStackedChartOption('PAR Items Removed', detailsStackedSeries.par_item_removed),
       // parItemAddedStackedChartOption: createDetailsStackedChartOption('PAR Items Added', detailsStackedSeries.par_item_added),
       // newInvValueStackedChartOption: createDetailsStackedChartOption('New Inv. Value', detailsStackedSeries.new_inv_value),
       // dimConstraintAlertStackedChartOption: createDetailsStackedChartOption('Dim. Constraint Alerts', detailsStackedSeries.dim_constraint_alert),
       // expectedLineStackedChartOption: createDetailsStackedChartOption('Expected Lines', detailsStackedSeries.expected_line),


       // ABC class 
       // abcClassA_PieChartOption: createAbcClassPieChartOption('Class A', abcLocation.A),
       // abcClassB_PieChartOption: createAbcClassPieChartOption('Class B', abcLocation.B),


       locations: locationList,
       overviewPercentageChartListOption,
       overviewChartListOption,
       detailsListOption,
       abcListOption,
       storageInsightsListOption
     }

   },
   methods: {
     creatChart(option) {
       const bar_dom = document.getElementById(option);
       const bar_chart = mycharts.init(bar_dom);

       bar_chart.setOption(this[option])
     },
     createPercentageChart(option) {
    
       const bar_dom = document.getElementById(option.name);
       const bar_chart = mycharts.init(bar_dom);

       bar_chart.setOption(option.option)
     }

   },
   computed: {

   },
   mounted() {
     for (let i of chartList) {
       console.log('---', i)
       this.creatChart(i);

     }

     /// need to modify the  createChart() 
     // this.createPercentageChart(this.percentageCharts[0]);
     //  this.creatChart('33');
     for (const c of this.overviewPercentageChartListOption) {
       this.createPercentageChart(c);
     }

     for (const c of this.overviewChartListOption) {
       this.createPercentageChart(c);
     }

     for (const c of this.detailsListOption) {
       this.createPercentageChart(c);
     }
     for (const c of this.storageInsightsListOption) {
       this.createPercentageChart(c);
     }

     for (const c of this.abcListOption) {
       this.createPercentageChart(c);
     }
     
   }

 })

 app.use(Qplugin, {
   config: {}
 })
 app.mount('#q-app')

{
  "id":8,
  "name":"migxrecipes_instructions",
  "formtabs":[
    {
      "caption":"undefined",
      "pos":1,
      "MIGX_id":16,
      "MIGXtype":"formtab",
      "MIGXtyperender":"<h3>formtab<\/h3>",
      "fields":[
        {
          "MIGX_id":38,
          "MIGXtype":"field",
          "MIGXtyperender":"<h3>...field<\/h3>",
          "field":"title",
          "caption":"Instruction",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "MIGXlayoutid":0,
          "MIGXcolumnid":0,
          "MIGXcolumnwidth":0,
          "MIGXcolumnminwidth":"",
          "MIGXcolumnstyle":"",
          "MIGXcolumncaption":"",
          "MIGXlayoutstyle":"",
          "MIGXlayoutcaption":"",
          "pos":1
        },
        {
          "MIGX_id":64,
          "MIGXtype":"field",
          "MIGXtyperender":"<h3>...field<\/h3>",
          "field":"image",
          "caption":"Image",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"image",
          "validation":"",
          "configs":"",
          "restrictive_condition":"[[migxIsNewObject]]",
          "display":"",
          "sourceFrom":"config",
          "sources":[
            {
              "MIGX_id":1,
              "context":"web",
              "sourceid":3
            },
            {
              "MIGX_id":2,
              "context":"mgr",
              "sourceid":3
            }
          ],
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "MIGXlayoutid":0,
          "MIGXcolumnid":0,
          "MIGXcolumnwidth":0,
          "MIGXcolumnminwidth":"",
          "MIGXcolumnstyle":"",
          "MIGXcolumncaption":"",
          "MIGXlayoutstyle":"",
          "MIGXlayoutcaption":"",
          "pos":2
        },
        {
          "MIGX_id":67,
          "MIGXtype":"field",
          "MIGXtyperender":"<h3>...field<\/h3>",
          "field":"imagehint",
          "caption":"",
          "description":"<br><br>\n<strong>Image<\/strong><br>\nTo add an image, please save the Recipe first!",
          "description_is_code":1,
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"[[migxIsNewObject:is=`1`:then=``:else=`1`]]",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "useDefaultIfEmpty":"0",
          "MIGXlayoutid":0,
          "MIGXcolumnid":0,
          "MIGXcolumnwidth":0,
          "MIGXcolumnminwidth":"",
          "MIGXcolumnstyle":"",
          "MIGXcolumncaption":"",
          "MIGXlayoutstyle":"",
          "MIGXlayoutcaption":"",
          "pos":3
        }
      ]
    }
  ],
  "contextmenus":"",
  "actionbuttons":"",
  "columnbuttons":"edit_migx",
  "filters":"",
  "extended":{
    "migx_add":"Add Instruction",
    "disable_add_item":"",
    "add_items_directly":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"recipes_instructions",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "multiple_formtabs_label":"",
    "multiple_formtabs_field":"",
    "multiple_formtabs_optionstext":"",
    "multiple_formtabs_optionsvalue":"",
    "actionbuttonsperrow":4,
    "winbuttonslist":"",
    "extrahandlers":"",
    "filtersperrow":4,
    "packageName":"migxrecipes",
    "classname":"",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "sortconfig":"",
    "gridpagesize":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":"",
    "hooksnippets":"",
    "cmpmaincaption":"",
    "cmptabcaption":"",
    "cmptabdescription":"",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"Instruction",
      "dataIndex":"title",
      "width":60,
      "sortable":"false",
      "show_in_grid":1,
      "customrenderer":"",
      "renderer":"this.renderRowActions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":" ",
      "renderoptions":"",
      "editor":""
    }
  ],
  "createdby":3,
  "createdon":"2016-02-08 22:18:41",
  "editedby":3,
  "editedon":"2016-02-14 12:20:14",
  "deleted":0,
  "deletedon":null,
  "deletedby":0,
  "published":1,
  "publishedon":null,
  "publishedby":0
}
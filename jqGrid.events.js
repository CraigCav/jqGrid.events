jQuery.extend(jQuery.jgrid.defaults, { 
    afterInsertRow: function (rowid, rowdata, rowelem) {
        $(this).triggerHandler("afterInsertRow.jqGrid", [rowid, rowdata, rowelem]);
    },	
    gridComplete: function () {
        $(this).triggerHandler("gridComplete.jqGrid");
    },
    loadBeforeSend: function (xhr, settings) {
        $(this).triggerHandler("loadBeforeSend.jqGrid", [xhr, settings]);
    },
    loadComplete: function (data) {
        $(this).triggerHandler("loadComplete.jqGrid", data);
    },
    loadError: function (xhr, status, error) {
        $(this).triggerHandler("loadError.jqGrid", [xhr, status, error]);
    },
    onCellSelect: function (rowid, iCol, cellContent, e) {
        $(this).triggerHandler("onCellSelect.jqGrid", [rowid, iCol, cellContent, e]);
    },
    ondblClickRow: function (rowid, iRow, iCol, e) {
        $(this).triggerHandler("ondblClickRow.jqGrid", [rowid, iRow, iCol, e]);
    },
    onHeaderClick: function (gridstate) {
        $(this).triggerHandler("onHeaderClick.jqGrid", gridstate);
    },
    onPaging: function (pgButton) {
        $(this).triggerHandler("paging.jqGrid", pgButton);      
    },
    onRightClickRow: function (rowid, iRow, iCol, e) {
        $(this).triggerHandler("onRightClickRow.jqGrid", [rowid, iRow, iCol, e]);
    },
    onSelectAll: function (ids, selected) {
        $(this).triggerHandler("selectAll.jqGrid", [ids, selected]);        
    },
    onSelectRow: function (id, selected) {
        $(this).triggerHandler("selectRow.jqGrid", [id, selected]);
    },
    onSortCol: function (index, iCol, sortorder) {
        $(this).triggerHandler("sortCol.jqGrid", [index, iCol, sortorder]);
    },
    resizeStart: function (event, index) {
        $(this).triggerHandler("resizeStart.jqGrid", [event, index]);
    },
    resizeStop: function (newwidth, index) {
        $(this).triggerHandler("resizeStop.jqGrid", [newwidth, index]);
    }
});
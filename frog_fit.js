jQuery(document).ready(function () {
    var table = $("#frog_fit_table").DataTable({
      paging: false,
      ordering: false,
      info: false,
      responsive: true,
      details: true,
      columnDefs: [{ responsivePriority: 1, targets: 4 }],
      dom: '<"search_box_inseam"f>rt<"bottom"lp><"clear">',
      oLanguage: {
        sSearch: "",
      },
      language: {
        searchPlaceholder: "in cm",
      },
      columnDefs: [
        {
          target: 7,
          visible: false,
          searchable: true,
        },
      ],
    });

    jQuery(".dataTables_filter input")
      .off()
      .on("keyup", function () {
        console.log("event");
        table.column(7).search(this.value).draw();
      });
  });
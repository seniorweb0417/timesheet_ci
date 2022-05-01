var credentials = {};

$(document).ready(function() {
    $('.datepicker').datepicker();

    $(document).on('click blur', 'td', function() {
        var conattr = $(this).attr('contenteditable');
        if (typeof conattr !== typeof undefined && conattr !== false) {
            var sum = 0;
            var p = $(this).parent();

            $(p).find('.edit-item').each(function() {
                sum += Number($(this).html());
            });
            
            $(p).find('.total_hrs').html(sum);
        }
    })

    $('#reset_btn').click(function() {
        document.location.href = document.location.href;
    });

    $('#approve_modal_btn').click(function() {
        $('#password').val('');
        $('#password').focus();
        $('#password_modal').modal();
    });

    $('#approve_btn').click(function() {
        show_sign();
    });

    $('#report_btn').click(function() {
        print();

        // $.ajax({
        //     url: $('#base_url').val() + 'index.php/welcome/sendEmail',
        //     method: 'POST',
        //     success: function(ret) {
        //         console.log(ret);
        //         return false;
        //     }
        // });

        /*
        $('.hidden_date').html($('.datepicker').val());

        var option = {
            orientation: 'l',
            unit: 'px',
            format: [1820, 700],
            putOnlyUsedFonts:true
        };

        var doc = new jsPDF(option);
        var elementHTML = $('body').html();
        var specialElementHandlers = {
            '#approve_modal_btn': function (element, renderer) {
                return true;
            },
            '#password_modal': function (element, renderer) {
                return true;
            },
            '#action_wrapper': function (element, renderer) {
                return true;
            }
        };

        // doc.autoTable({html: '#time_table'});

        doc.fromHTML(elementHTML, 15, 15, {
            'width': 920,
            'elementHandlers': specialElementHandlers
        }, function(blah) {
            doc.save('sample-document.pdf');
        });
        


        // var element = document.getElementById('for_pdf');
        // var opt = {
        //     margin:       1,
        //     filename:     'myfile.pdf',
        //     image:        { type: 'jpeg', quality: 0.98 },
        //     html2canvas:  { scale: 2 },
        //     jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
        // };

        // // New Promise-based usage:
        // html2pdf().set(opt).from(element).save();

        // // Old monolithic-style usage:
        // html2pdf(element, opt);
        */
    });

    $(document).on('click', '.remove_tr', function() {
        if (confirm('Are you sure?')) {
            $(this).closest('tr').remove();
        }
    });

    $('.modal-form').submit(function(e) {
        e.preventDefault();
        show_sign();
    });

    credentials = JSON.parse($('#credential').val());
});

function show_sign() {
    var passwd = $('#password').val();
    if ($('#password').val() == '') {
        alert('Enter your password.'); 
        return;
    }

    if (credentials[passwd] !== undefined) {
        // var file_link = $('#base_url').val() + 'assets/img/' + credentials[passwd] + '.jpg';
        var file_link = 'assets/img/' + credentials[passwd] + '.jpg';
        $('.sign').html('<img src="' + file_link + '">');
    } else {
        $('.sign').html('');
    }

    $('#password_modal').modal('hide');
}

function add_row() {
    var html = "";
    html += '<tr>';
    html += '   <td contenteditable></td>';
    html += '   <td contenteditable></td>';
    html += '   <td contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="edit-item" contenteditable></td>';
    html += '   <td class="total_hrs"></td>';
    html += '   <td contenteditable></td>';
    html += '   <td><a href="javascript:void(0);" class="remove_tr"><i class="glyphicon glyphicon-trash"></i></a></td>';
    html += '</tr>';

    $('table tbody').append(html);
}
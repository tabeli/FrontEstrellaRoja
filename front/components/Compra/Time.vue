<template>
    <div>
    <div class="container">
    <div class="row">
        <div class='col-sm-6'>
        <!--Form-->
            <div class="form-group">
                <div class='input-group date' id='datetimepicker3'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-time"></span>
                    </span>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(function () {
                $('#datetimepicker3').datetimepicker({
                    format: 'LT'
                });
            });
        </script>
    </div>
</div>
    </div>
  </template>
  
  <script>
</script>
  
  <style>
</style>
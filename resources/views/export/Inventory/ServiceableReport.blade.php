<table>
    <tr>
        <td colspan="7" rowspan="3"></td>
        <td rowspan="3" x:str="">DATE OF INVENTORY:</td>
        <td colspan="2" rowspan="3">{{ $date }}</td>
        <td x:str="">INVENTORY FORM NUMBER:</td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="2" x:str="">NAME OF INVENTORY PERSONNEL</td>
        <td rowspan="2">{{ $office->lastname }}, {{ $office->firstname }}, {{ $office->suffix ? $office->suffix : '' }}</td>
    </tr>
    <tr>
    </tr>
    <tr>
        <td colspan="4" rowspan="2" x:str="">ASSET DESCRIPTION</td>
        <td rowspan="2" x:str="">HARDWARE CATEGORY</td>
        <td rowspan="2" x:str="">Qty</td>
        <td rowspan="2" x:str="">Unit</td>
        <td rowspan="2" x:str="">MODEL NUMBER</td>
        <td rowspan="2" x:str="">SERIAL NUMBER</td>
        <td rowspan="2" x:str="">SERVICEABLE</td>
        <td rowspan="2" x:str="">DEPARTMENT TAG / ASSET ID NUMBER</td>
        <td rowspan="2" x:str="">REMARKS</td>
    </tr>
    <tr>
    </tr>
    @foreach ($invoices as $invoice)
        <tr>
            <td colspan="4">{{ $invoice->asset_desc }}</td>
            <td>{{ $invoice->category }}</td>
            <td>
                {{ $invoice->serviceble + $invoice->unserviceable + $invoice->poor }}
            </td>
            <td>{{ $invoice->unit }}</td>
            <td>{{ $invoice->model_number }}</td>
            <td>{{ $invoice->serial_number }}</td>
            <td>{{ $invoice->serviceable }}</td>
            <td>{{ $invoice->asset_id }}</td>
            <td>{{ $invoice->remarks }}</td>
        </tr>
    @endforeach
    <tr>
        <td colspan="12" x:str="">EQUIPMENT INVENTORY SUMMARY PER DEPARTMENT (TO BE FILLED BY IT DEPARTMENT. DO
            NOT FILL THIS FIELD)</td>
    </tr>
    <tr>
        <td colspan="4" rowspan="3"></td>
        <td colspan="3" x:str="">INVENTORY PREPARED BY:</td>
        <td colspan="4"></td>
        <td x:str="">DATE VERIFIED:</td>
    </tr>
    <tr>
        <td colspan="3" rowspan="2"></td>
        <td colspan="4" rowspan="2"></td>
        <td rowspan="2"></td>
    </tr>
    <tr>
    </tr>
    <tr>
        <td colspan="12" x:str="">NOTE: EQUIPMENT ON LOAN-BASIS SHALL NOT BE INCLUDED IN THIS FORM</td>
    </tr>
</table>

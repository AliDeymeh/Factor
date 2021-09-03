/**-----------------------اینجا میخوام برای جدول المان جدید بسازم با اسم های مشخص شده ------------------ */
const table = document.querySelector('table tbody');
const AddNewRowBtn = document.querySelector('.btnss2');

const CalculatePriceBtn = document.querySelector('.btns');
const ViewTotalPrice = document.querySelector('.jamekols');


AddNewRowBtn.onclick = () => {
    let ProductName = prompt('نام ردیف را وارد کنید؟');

    table.innerHTML +=
        `
        <tr>
            <td>${ProductName}</td>
            <td><input type="number" placeholder="0"></td>
            <td><input type="number" placeholder="0"></td>
        </tr>
        `;
}

CalculatePriceBtn.onclick = () => {
    const ProductRow = document.querySelectorAll('tbody > tr');
    let TotalPrice = 0;
    ProductRow.forEach(item => {
        const Inputs = item.querySelectorAll('input');
        let ProductCount = Inputs[0].value,
            ProductPrice = Inputs[1].value;

        TotalPrice += ProductCount * ProductPrice;
    })

    ViewTotalPrice.innerHTML = TotalPrice;
}
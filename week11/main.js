console.log("Hello, World!");
const data =

[
    {
        "id": 1,
        "plan_code": "FE",
        "name_eng": "Frontend Developer",
        "name_th": "นักพัฒนาฟรอนเอนด์"
    },
    {
        "id": 2,
        "plan_code": "BE",
        "name_eng": "Backend Developer",
        "name_th": "นักพัฒนาแบ็กเอนด์"
    },
    {
        "id": 3,
        "plan_code": "FS",
        "name_eng": "Full-Stack Developer",
        "name_th": "นักพัฒนาฟูลสแตก"
    },
    {
        "id": 4,
        "plan_code": "AI",
        "name_eng": "AI Developer",
        "name_th": "นักพัฒนาปัญญาประดิษฐ์"
    },
    {
        "id": 5,
        "plan_code": "DS",
        "name_eng": "Data Scientist",
        "name_th": "นักวิทยาการข้อมูล"
    },
    {
        "id": 6,
        "plan_code": "DA",
        "name_eng": "Data Analyst",
        "name_th": "นักวิเคราะห์ข้อมูล"
    },
    {
        "id": 7,
        "plan_code": "DE",
        "name_eng": "Data Engineer",
        "name_th": "วิศวกรข้อมูล"
    },
    {
        "id": 8,
        "plan_code": "DB",
        "name_eng": "Database Administrator",
        "name_th": "ผู้ดูแลฐานข้อมูล"
    },
    {
        "id": 9,
        "plan_code": "UX",
        "name_eng": "UX/UI Designer",
        "name_th": "นักออกแบบประสบการณ์ของผู้ใช้และส่วนต่อประสาน"
    }
]
const tbody = document.querySelector('.career-table');

data.forEach(item => {
  const row = document.createElement('tr');
  row.setAttribute('class' ,'ecors-row')
  row.innerHTML = `
    <td class="ecors-id">${item.id}</td>
    <td class="ecors-studyCode">${item.plan_code}</td>
    <td class="ecors-nameEng">${item.name_eng}</td>
    <td class="ecors-nameTh">${item.name_th}</td>
  `;
  tbody.appendChild(row);
});
console.log(data)
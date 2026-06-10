hienThi(records);

function hienThi(ds){

    let html = "";

    for(let i = 0; i < ds.length; i++){

        let mau = "secondary";

        if(ds[i].status == "Hoàn thành"){
            mau = "success";
        }

        if(ds[i].status == "Đang triển khai"){
            mau = "warning";
        }

        html += `
            <div class="card mb-3">
                <div class="card-body">

                    <h5>${ds[i].school}</h5>

                    <p>${ds[i].department}</p>

                    <p>${ds[i].description}</p>

                    <span class="badge bg-${mau}">
                        ${ds[i].status}
                    </span>

                </div>
            </div>
        `;
    }

    document.getElementById("danhsach").innerHTML = html;
}

let nutLoc = document.querySelectorAll(".loc");

for(let i = 0; i < nutLoc.length; i++){

    nutLoc[i].onclick = function(){

        let tt = this.dataset.trangthai;

        if(tt == "all"){
            hienThi(records);
        }
        else{

            let ketQua = [];

            for(let j = 0; j < records.length; j++){

                if(records[j].status == tt){
                    ketQua.push(records[j]);
                }

            }

            hienThi(ketQua);
        }
    }
}
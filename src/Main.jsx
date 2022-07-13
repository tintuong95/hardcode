import React, { useState } from "react";

import Card from "./Card.jsx";

export default function Main() {
    const [result ,setResult]=useState(undefined)
    const [newResult,setNewResult]=useState(undefined)
    const [number,setNumber]=useState(Math.floor(Math.random() * (9 + 1) ))
  const question = [
    {
      "Mắt cận thị là mắt mà khi không điều tiết có tiêu điểm nằm ở đâu?": {
        "Tiêu điểm nằm trước võng mạc": true,
        "Tiêu điểm nằm sau võng mạc": false,
        "Tiêu điểm nằm giữa võng mạc": false,
        "Đáp án khác": false,
      },
    },
    {
      " Augustin Louis Cauchy là nhà toán học nước nào?" : {
        "Đức": false,
        "Anh": false,
        "Pháp": false,
        "Tây Ban Nha": true,
      },
    },
    {
        "Ở người có bao nhiêu cặp nhiễm sắc thể?": {
          "13 cặp": false,
          "23 cặp": true,
          "21 cặp": false,
          "14 cặp": false,
        },
      },
      {
        "Ai là người đưa ra ba định luật di truyền?": {
          "Albert Einstein": false,
          "Newton": false,
          "Men – Đen": true,
          "Galilei": false,
        },
      },
      {
        "Sóng điện từ có bước sóng từ 100m – 10m được gọi là sóng gì?": {
          "Sóng siêu ngắn": false,
          "Sóng ngắn": true,
          "Sóng siêu dài": false,
          "Sóng dài ": false,
        },
      },
      {
        "Huyện đảo Phú Quốc thuộc tỉnh nào?": {
          "Trà Vinh": false,
          "An Giang": false,
          "Cà Mau": false,
          "Kiên Giang": true,
        },
      },
      {
        "Cầu thủ nào đã đạt danh hiệu quả bóng vàng thế giới 2006?": {
          "Cafu": false,
          "Roberto Carlos": false,
          "Ronaldinho": false,
          "Fabio Canavaro": true,
        },
      },
      {
        "Vị vua nào đã đặt quốc hiệu nước ta là Việt Nam như hiện nay?": {
          "Vua Gia Long": true,
          "Vua Tự Đức": false,
          "Vua Lê": false,
          "Đáp án khác": false,
        },
      },
      {
        " Tác phẩm Bản án chế độ thực dân của Hồ Chí Minh xuất bản lần đầu tiên ở đâu": {
          "Việt Nam": false,
          "Trung Quốc": false,
          "Pháp": true,
          "Anh": false,
        },
      },
      {
        " Ban ngày hay ban đêm trái đất quay quanh mặt trời nhanh hơn?": {
          "Ban ngày": false,
          "Ban đêm": true,
          "Cả ngày và đêm trái đất quay như nhau": false,
          "Đáp án khác": false,
        },
      },
  ];
  return (
    <div className="App full_screen p-5 full_screen d-flex flex-row  justify-content-center align-items-center">
      <div className="g-card m-auto">
      <Card setResult={setResult} data={question[number]} newResult={newResult}/>
        <div className="text-center">
        <button className="btn btn-secondary px-5 mx-2" onClick={()=>{
            setNumber(Math.floor(Math.random() * (9 + 1) ))
            setNewResult(undefined)
            setResult(undefined)
        }}>Câu khác</button>
          <button className="btn btn-danger px-5" onClick={()=>{
            const res=question.find(item=> Object.keys(item)[0]===result.title)
            const temp =(Object.entries(Object.entries(res)[0][1]).find(item=>{
                return item[1]
            }))
            
            if(temp[0]==result.select){
                setNewResult(true)
            }else{
                setNewResult(false)
            }
          }}>Kết quả</button>
        </div>
      </div>
    </div>
  );
}

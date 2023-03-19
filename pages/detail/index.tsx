import React from "react";

export default function Detail() {
  return (
    <div className="container">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          DataTable with minimal features & hover style
        </h3>
      </div>
      <div className="card-body">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          DataTable with minimal features & hover style
        </h3>
      </div>
      <div className="card-body">
      <h5 className="card-title">NIDN/NUPN/NIDK</h5>
    <p className="card-text">Silahkan lihat dokumen dengan klik tombol di  bawah ini !</p>
    <a href="https://drive.google.com/drive/folders/1wkt1Ahu6Eb2lfIVItdM0JBxz4QnlaZj9?usp=share_link" className="btn btn-primary">Dokumen</a>
      </div>
    </div>
    </div>
  );
}

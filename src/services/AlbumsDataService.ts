import http from "@/http-common";

class AlbumsDataService {
  getMany() {
    return http.get("/albums");
  }

  getManyByName(albumName: string) {
    return http.get(`/albums?albumName=${albumName}`);
  }

  get(catalogNumber: string) {
    return http.get(`/albums/${catalogNumber}`);
  }

  create(data: any) {
    return http.post("/albums", data);
  }

  update(catalogNumber: string, data: any) {
    return http.put(`/albums/${catalogNumber}`, data);
  }

  delete(catalogNumber: string) {
    return http.delete(`/albums/${catalogNumber}`);
  }

  deleteMany() {
    return http.delete(`/albums`);
  }
}

export default new AlbumsDataService();
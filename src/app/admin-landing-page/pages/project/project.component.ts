import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/services/project.model";
import { ProjectService } from "src/app/services/project/project.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  displayedColumns: string[] = ["projectname", "author", "date", "action"];

  dataSource: Project[] = [];
  isLoading = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.isLoading = true;
    this.projectService.getProjects().subscribe((data: Project[]) => {
      this.isLoading = false;
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  //****************************edit handler */
  edit(id) {
    console.log(id);
    this.projectService.getProjectById(id).subscribe((data) => {
      console.log(data);
    });
  }

  //********************delete handler */
  deleteHandler(id: string) {}
  //handling delete
  //  deleteHandler(id: string) {
  //   this.invoiceService.deleteInvoice(id).subscribe(
  //     (data) => {
  //       // console.log(data);
  //       const removeItem = remove(this.dataSource, (item) => {
  //         return item._id === data._id;
  //       });
  //       this.dataSource = [...this.dataSource];
  //       this.snackBar.open("invoice deleted", "success", {
  //         duration: 2000,
  //       });
  //     },
  //     (err) => {
  //       this.snackBar.open("oop's something went wrong", "error", {
  //         duration: 2000,
  //       });
  //     }
  //   );
  // }
}

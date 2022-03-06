import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostTitleComponent implements OnInit {

  faComments = faComments;
  @Input() posts: PostModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}

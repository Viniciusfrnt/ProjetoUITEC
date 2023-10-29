import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articleId: any;
  article: any = {
    nome: '',
    categoria: '',
    valor: 0,
    data: new Date(),
    estoque: '',
    perecivel: 'Não' 
  };

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.articleId = Number(routeParams.get('id'));
    console.log(this.articleId);
    this.articleService.find(this.articleId).subscribe((data: any) => {
      this.article = data;
      console.log(this.article);

      this.article.perecivel = this.article.perecivel === 'Sim' ? 'Sim' : 'Não';
      this.article.estoque = this.formatEstoque(this.article.estoque);
    });
  }

  updateArticle() {
    this.article.perecivel = this.article.perecivel === 'Não' ? 'Sim' : 'Não';
    this.article.estoque = this.formatEstoque(this.article.estoque);

    this.articleService.update(this.articleId, this.article).subscribe((res) => {
      this.router.navigateByUrl('/');
    })    
  }

  formatEstoque(quantidade: string): string {
    return quantidade + ' Unidades';
  }
}

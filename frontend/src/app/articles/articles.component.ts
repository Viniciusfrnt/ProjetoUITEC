import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']  
})

export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'valor', 'data', 'estoque', 'perecivel'];
  dataSource: MatTableDataSource<any>;

  constructor(private articleService: ArticleService, private router: Router) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.showArticles();
  }

  showArticles() {
    this.articleService.listArticles().subscribe(articles => {
      this.dataSource.data = articles;
      console.log(this.dataSource.data);
    });
  }

  deleteArticle(id: any) {
    this.articleService.deleteArticle(id).subscribe(
      () => {
        this.showArticles(); 
      },
      (error) => {
        console.error('Erro ao excluir o artigo:', error);
      }
    );
  }

  editItem(item: any) {
    console.log('Editando o item:', item);
  }

  deleteItem(item: any) {
    if (confirm('Tem certeza de que deseja excluir este item?')) {
      this.articleService.deleteArticle(item.id).subscribe(
        () => {
          
          this.showArticles();
        },
        (error) => {
          console.error('Erro ao excluir o artigo:', error);
        }
      );
    }
  }
  

  addItem() {
    console.log('Adicionando um novo item');
  }
}

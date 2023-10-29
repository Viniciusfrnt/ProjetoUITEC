import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  itemForm: FormGroup;
  listaDeItens: any[] = [];

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router:Router) {
    this.itemForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      valor: '',
      data: ['', Validators.required],
      estoque: '',
      perecivel: 'Não'  
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const formData = this.itemForm.value;
  
      const perecivelFormatado = formData.perecivel === 'Não' ? 'Sim' : 'Não';
      const valorEmReais = 'R$ ' + Number(formData.valor).toFixed(2).replace('.', ',');
      const estoqueFormatado = formData.estoque + ' Unidades';
  
      const article: any = {
        nome: formData.nome,
        categoria: formData.categoria,
        valor: valorEmReais,
        estoque: estoqueFormatado,
        perecivel: perecivelFormatado
      };
  
      if (formData.data) {
        article.data = formData.data;
      }
  
      this.add(article);
      this.itemForm.reset();
    } else {
    }
  }
  
  add(article: any) {
    this.articleService.addArticle(article).subscribe((response) => {
      console.log("Artigo adicionado:", response);
      this.listaDeItens.push(response);
    });
  
    this.router.navigateByUrl('/');
  }
  
}

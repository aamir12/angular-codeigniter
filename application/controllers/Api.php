<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('api_model');
        $this->load->helper('text');
    }

    public function blogs()
    {
        header("Access-Control-Allow-Origin: *");

        $blogs = $this->api_model->get_blogs($featured=false, $recentpost=false);

        $posts = array();
        if(!empty($blogs)){
            foreach($blogs as $blog){

                $short_desc = strip_tags(character_limiter($blog->description, 70));
                $author = $blog->first_name.' '.$blog->last_name;

                $posts[] = array(
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'short_desc' => html_entity_decode($short_desc),
                    'author' => $author,
                    'image' => IMGURL.$blog->image,
                    'created_at' => $blog->created_at
                );
            }
        }

        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($posts));
    }

    public function featured_blogs()
    {
        header("Access-Control-Allow-Origin: *");

        $blogs = $this->api_model->get_blogs($featured=true, $recentpost=false);

        $posts = array();
        if(!empty($blogs)){
            foreach($blogs as $blog){
                
                $short_desc = strip_tags(character_limiter($blog->description, 70));
                $author = $blog->first_name.' '.$blog->last_name;

                $posts[] = array(
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'short_desc' => html_entity_decode($short_desc),
                    'author' => $author,
                    'image' => IMGURL.$blog->image,
                    'created_at' => $blog->created_at
                );
            }
        }

        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($posts));
    }

    public function recent_blogs()
    {
        header("Access-Control-Allow-Origin: *");

        $blogs = $this->api_model->get_blogs($featured=false, $recentpost=5);

        $posts = array();
        if(!empty($blogs)){
            foreach($blogs as $blog){
                
                $short_desc = strip_tags(character_limiter($blog->description, 70));
                $author = $blog->first_name.' '.$blog->last_name;

                $posts[] = array(
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'short_desc' => html_entity_decode($short_desc),
                    'author' => $author,
                    'image' => IMGURL.$blog->image,
                    'created_at' => $blog->created_at
                );
            }
        }

        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($posts));
    }

    public function categories()
    {
        header("Access-Control-Allow-Origin: *");

        $categories = $this->api_model->get_categories();
        
        $category = array();
        if(!empty($categories)){
          foreach($categories as $cate){
              $category[] = array(
              	'id' => $cate->id,
              	'name' => $cate->category_name
              );
          }
        }

        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($category));
    }

    public function blog($id)
    {
        header("Access-Control-Allow-Origin: *");
        
        $blog = $this->api_model->get_blog($id);
        
        $author = $blog->first_name.' '.$blog->last_name;

        $post = array(
          'id' => $blog->id,
          'title' => $blog->title,
          'description' => $blog->description,
          'author' => $author,
          'image' => IMGURL.$blog->image,
          'created_at' => $blog->created_at
         );
        
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($post));
    }

    public function page($slug)
    {
        header("Access-Control-Allow-Origin: *");
        
        $page = $this->api_model->get_page($slug);
        
        $pagedata = array(
          'id' => $page->id,
          'title' => $page->title,
          'description' => $page->description
        );
        
        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($pagedata));
    }
}
?>
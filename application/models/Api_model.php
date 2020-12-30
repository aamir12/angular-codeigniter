<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api_model extends CI_Model 
{
    public function get_blogs($featured, $recentpost)
    {
        $this->db->select('blog.*, cat.category_name, u.first_name, u.last_name');
        $this->db->from('blogs blog');
        $this->db->join('users u', 'u.id=blog.user_id');
        $this->db->join('categories cat', 'cat.id=blog.category_id', 'left');
        $this->db->where('blog.is_active', 1);

        if($featured) {
            $this->db->where('blog.is_featured', 1);
        }
        if($recentpost){
            $this->db->order_by('blog.created_at', 'desc');
            $this->db->limit($recentpost);
        }
        $query = $this->db->get();
        return $query->result();
    }

    public function get_blog($id)
    {
        $this->db->select('blog.*, cat.category_name, u.first_name, u.last_name');
        $this->db->from('blogs blog');
        $this->db->join('users u', 'u.id=blog.user_id');
        $this->db->join('categories cat', 'cat.id=blog.category_id', 'left');
        $this->db->where('blog.is_active', 1);
        $this->db->where('blog.id', $id);
        $query = $this->db->get();
        return $query->row();
    }

    public function get_categories()
    {
        $query = $this->db->get('categories');
        return $query->result();
    }

    public function get_page($slug)
    {
        $this->db->where('slug', $slug);
        $query = $this->db->get('pages');
        return $query->row();
    }
}
?>
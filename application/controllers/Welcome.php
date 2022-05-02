<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function sendEmail() {
        $msg = $this->load->view('welcome_message', '', true);

		$this->load->library('email');
		$config['mailtype'] = 'html';
		// $config['protocol']='smtp';
		// $config['smtp_host']='';
		// $config['smtp_port']='';
		// $config['smtp_timeout']='';
		// $config['smtp_user']='';
		// $config['smtp_pass']='';
		// $config['charset']='utf-8';
		// $config['wordwrap'] = TRUE;
		$this->email->initialize($config);
		$this->email->from('kirk@freelancer.com', 'Kirk');
		// $this->email->to('AccountingClerk@emtns.loc');
		$this->email->to('seniorweb0417@outlook.com');
		$this->email->message($msg);
		if (!$this->email->send()) {
			echo 'email send failed';
		} else {
			echo 'email send successfully.';
		}
	}
}

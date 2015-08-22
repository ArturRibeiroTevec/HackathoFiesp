//
//  ViewController.swift
//  HackathonProj
//
//  Created by Jorge Henrique P. Garcia on 8/22/15.
//  Copyright (c) 2015 Jhpg. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var webView: UIWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        let strUrl = "http://www.google.com"
        let url = NSURL(string: strUrl)
        let urlRequest = NSURLRequest(URL: url!)
        webView.loadRequest(urlRequest)
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}


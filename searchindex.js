Search.setIndex({docnames:["api/analysis","api/gqcnn","api/grasping","api/policy","api/training","api/visualization","benchmarks/benchmarks","data/data","index","info/info","install/install","scripts/examples","scripts/tools","tutorials/planning","tutorials/training","tutorials/tutorial"],envversion:52,filenames:["api/analysis.rst","api/gqcnn.rst","api/grasping.rst","api/policy.rst","api/training.rst","api/visualization.rst","benchmarks/benchmarks.rst","data/data.rst","index.rst","info/info.rst","install/install.rst","scripts/examples.rst","scripts/tools.rst","tutorials/planning.rst","tutorials/training.rst","tutorials/tutorial.rst"],objects:{"":{plot_training_losses:[12,4,0,"-"],policy:[11,4,0,"-"],training:[12,4,0,"-"],visualize_predictions:[12,4,0,"-"]},"gqcnn.AntipodalGraspingPolicy":{action:[3,2,1,""],select:[3,2,1,""]},"gqcnn.ClassificationResult":{__init__:[0,2,1,""],ap_score:[0,0,1,""],auc_score:[0,0,1,""],confusion_matrix:[0,0,1,""],convert_labels:[0,2,1,""],correct_indices:[0,2,1,""],error_rate:[0,0,1,""],fpr:[0,0,1,""],label_vectors:[0,2,1,""],load:[0,3,1,""],mispredicted_indices:[0,2,1,""],multiclass_label_vectors:[0,2,1,""],num_categories:[0,0,1,""],num_datapoints:[0,0,1,""],precision:[0,0,1,""],precision_recall_curve:[0,2,1,""],predictions:[0,0,1,""],recall:[0,0,1,""],roc_curve:[0,2,1,""],save:[0,2,1,""],top_k_error_rate:[0,2,1,""],top_k_predictions:[0,2,1,""]},"gqcnn.ConfusionMatrix":{__init__:[0,2,1,""],update:[0,2,1,""]},"gqcnn.CrossEntropyAntipodalGraspingPolicy":{action:[3,2,1,""],select:[3,2,1,""]},"gqcnn.GQCNN":{__init__:[1,2,1,""],add_softmax_to_predict:[1,2,1,""],close_session:[1,2,1,""],filters:[1,0,1,""],get_im_mean:[1,2,1,""],get_im_std:[1,2,1,""],get_pose_mean:[1,2,1,""],get_pose_std:[1,2,1,""],get_tf_graph:[1,2,1,""],get_weights:[1,2,1,""],init_mean_and_std:[1,2,1,""],init_weights_file:[1,2,1,""],init_weights_gaussian:[1,2,1,""],initialize_network:[1,2,1,""],load:[1,3,1,""],open_session:[1,2,1,""],predict:[1,2,1,""],reinitialize_layers:[1,2,1,""],update_batch_size:[1,2,1,""],update_im_mean:[1,2,1,""],update_im_std:[1,2,1,""],update_pose_mean:[1,2,1,""],update_pose_std:[1,2,1,""]},"gqcnn.GQCNNAnalyzer":{__init__:[0,2,1,""],analyze:[0,2,1,""]},"gqcnn.GQCNNPredictionVisualizer":{__init__:[5,2,1,""],visualize:[5,2,1,""]},"gqcnn.Grasp2D":{axis:[2,0,1,""],endpoints:[2,0,1,""],feature_vec:[2,0,1,""],frame:[2,0,1,""],from_feature_vec:[2,3,1,""],image_dist:[2,3,1,""],pose:[2,2,1,""],width_px:[2,0,1,""]},"gqcnn.GraspingPolicy":{action:[3,2,1,""],config:[3,0,1,""],gqcnn:[3,0,1,""],grasp_sampler:[3,0,1,""],grasps_to_tensors:[3,2,1,""]},"gqcnn.ImageGraspSampler":{sample:[2,2,1,""]},"gqcnn.Policy":{action:[3,2,1,""]},"gqcnn.RegressionResult":{__init__:[0,2,1,""],error_rate:[0,0,1,""],load:[0,3,1,""],num_datapoints:[0,0,1,""],save:[0,2,1,""]},"gqcnn.SGDOptimizer":{__init__:[4,2,1,""],optimize:[4,2,1,""]},"gqcnn.TrainStatsLogger":{__init__:[4,2,1,""],log:[4,2,1,""],update:[4,2,1,""]},"gqcnn.Visualizer":{box:[5,3,1,""],clf:[5,3,1,""],colorbar:[5,3,1,""],figure:[5,3,1,""],grasp:[5,3,1,""],imshow:[5,3,1,""],plot:[5,3,1,""],savefig:[5,3,1,""],scatter:[5,3,1,""],show:[5,3,1,""],subplot:[5,3,1,""],title:[5,3,1,""],xlabel:[5,3,1,""],ylabel:[5,3,1,""]},AntipodalGraspingPolicy:{state:[3,0,1,""]},CrossEntropyAntipodalGraspingPolicy:{state:[3,0,1,""]},Grasp2D:{angle:[2,0,1,""],camera_intr:[2,0,1,""],center:[2,0,1,""],depth:[2,0,1,""],width:[2,0,1,""]},GraspingPolicy:{config:[3,0,1,""],grasps:[3,0,1,""],state:[3,0,1,""]},ImageGraspSampler:{config:[2,0,1,""],gripper_width:[2,0,1,""]},RgbdImageState:{camera_intr:[3,0,1,""],full_observed:[3,0,1,""],rgbd_im:[3,0,1,""],segmask:[3,0,1,""]},gqcnn:{AntipodalDepthImageGraspSampler:[2,1,1,""],AntipodalGraspingPolicy:[3,1,1,""],ClassificationResult:[0,1,1,""],ConfusionMatrix:[0,1,1,""],CrossEntropyAntipodalGraspingPolicy:[3,1,1,""],GQCNN:[1,1,1,""],GQCNNAnalyzer:[0,1,1,""],GQCNNPredictionVisualizer:[5,1,1,""],GeneralConstants:[4,1,1,""],Grasp2D:[2,1,1,""],GraspingPolicy:[3,1,1,""],ImageFileTemplates:[4,1,1,""],ImageGraspSampler:[2,1,1,""],ImageGraspSamplerFactory:[2,1,1,""],ImageMode:[4,1,1,""],NoAntipodalPairsFoundException:[3,1,1,""],NoValidGraspsException:[3,1,1,""],ParallelJawGrasp:[3,1,1,""],Policy:[3,1,1,""],PreprocMode:[4,1,1,""],RegressionResult:[0,1,1,""],RgbdImageState:[3,1,1,""],SGDOptimizer:[4,1,1,""],TrainStatsLogger:[4,1,1,""],TrainingMode:[4,1,1,""],Visualizer:[5,1,1,""]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","module","Python module"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:module"},terms:{"189k":7,"3dnet":7,"70cm":8,"abstract":[2,3,13,15],"boolean":0,"case":15,"class":[0,1,2,3,4,5,14,15],"default":[11,14,15],"enum":4,"final":[0,1,3,11,13,14,15],"float":[0,1,2,3,5,11,12],"function":[5,12,13,14,15],"import":10,"int":[0,2,3,5,11,12],"long":12,"new":[0,7,12,13,14,15],"public":8,"return":[0,1,2,3,5,13,15],"static":[0,1,2,5],"true":[0,1,5,11,12,14,15],"try":[11,13,15],"while":[4,9],For:[8,10,13,14,15],One:[14,15],ROS:8,The:[2,6,7,8,9,10,11,12,13,14,15],Then:[10,14,15],There:[14,15],These:6,__init__:[0,1,4,5,15],_load_config:15,abb:[6,7,8,13,15],abil:[14,15],abov:8,academ:7,access:[0,14,15],achiev:6,across:[2,7,8],action:3,activ:8,actual:12,adam:12,add:[1,5,12],add_softmax:1,add_softmax_to_predict:1,added:12,adding:12,addit:[2,6],adv:[7,14,15],adversari:7,after:[12,14,15],algorithm:15,all:[2,4,8,12,15],allow:[2,5,7,11,12,14,15],along:[12,13,14,15],alpha:[2,12],also:[10,12,13,14,15],altern:[3,10],amount:2,analys:12,analysi:8,analysis_config:[14,15],analyz:[0,12,14,15],analyze_gqcnn_perform:[14,15],angl:2,angle_dist_weight:[2,11],ani:[3,4,10,14,15],antipod:[2,3,7,11],antipodal_depth:11,antipodaldepthimagegraspsampl:8,antipodalgraspingpolici:8,anywher:10,ap_scor:0,api:[8,10],appli:12,approach:2,appropri:[10,15],approxim:[14,15],architectur:[1,6,8,9,12,14,15],architecur:1,area:[0,12],arg:5,argument:[4,12],aris:7,around:[2,11,12],arrai:[14,15],arrow:5,arrow_head_len:5,arrow_head_width:5,arrow_len:5,arrow_width:5,as_default:[14,15],assert:7,assum:12,attribut:0,auc_scor:0,autoclass:4,autolab:15,autolab_cor:[2,5,10,14,15],automat:[10,14,15],avail:[7,10],averag:0,axes:11,axi:[2,5],background:[8,12],background_denois:12,background_max_depth:12,background_min_depth:12,background_r:12,base:[0,1,2,3,4,5,8,9,11,12],base_lr:12,bash:10,basi:2,basic:1,batch:[1,12,14,15],batch_siz:[1,12],becaus:[8,15],becom:7,been:[8,10,13,15],befor:[2,11,12,14,15],behavior:3,being:[12,14,15],believ:6,belong:12,benchmark:[6,8,14,15],berkelei:[6,7,13,15],berkeleyautom:[5,8],best:3,beta:12,better:2,between:[2,8,11,12],bia:12,binari:[2,3,12],binaryimag:[2,3],bodi:5,bool:[1,2,3,5,11],border:12,border_distort:12,border_grad_sigma:12,border_grad_thresh:12,border_poisson_mean:12,border_radius_scal:12,border_radius_shap:12,both:10,bound:[11,13,15],boundari:11,box:[5,11,13,14,15],branch:10,broadli:7,browser:[14,15],bug:8,build:[1,8],calcul:[0,12,14,15],calib_dir:11,calibr:11,call:[14,15],camer:[13,15],camera:[2,3,8,11,13,15],camera_intr:[2,3],cameraintrins:[2,3],can:[3,6,7,8,10,13,14,15],candid:[2,3,11],cannot:3,capac:12,captur:2,carmin:8,categori:0,catkin:8,catkin_mak:10,catkin_w:15,ceil:2,cem:[3,11],center:[2,5,11],certain:12,cfg:[11,13,14,15],challeng:[14,15],chang:[10,11,13,14,15],channel:12,charact:[12,14,15],characterist:[0,14,15],check:[2,10,14,15],checkout:10,choic:[14,15],choos:[14,15],chosen:12,cite:8,classif:[0,4,12],classificationresult:8,clear:5,clf:5,click:15,clone:8,close:1,close_sess:[1,14,15],closur:2,cloud:[9,13,15],cnn:[1,2,3,4,7,8,10,11,12,13,14,15],code:[8,10],coeffici:[2,11],collis:8,color:[0,5,12,13,15],colorbar:5,column:[14,15],com:10,command:[10,12],compon:[3,11],comput:[2,11],concern:8,config:[0,1,2,3,4,5,12,13,14,15],config_filenam:15,configur:[0,1,2,3,4,5,8],confus:0,confusion_matrix:0,confusionmatrix:8,connect:[1,12],consid:[6,7,13,15],constant:[4,11],construct:[14,15],contact:[8,13,15],contain:[0,2,11,12,14,15],continuosuli:12,control:[13,15],conv1_1:[1,12],conv1_2:12,convert:[0,3,12],convert_label:0,convolut:[3,8,12],convx_i:12,copyright:7,core:15,correct_indic:0,correctli:0,correl:12,correspond:[0,2,5,13,14,15],could:[13,15],covari:3,cover:15,crane:2,creat:[2,5,14,15],crop:11,crop_height:11,crop_width:11,cross:[3,11,12,13,15],crossentropyantipodalgraspingpolici:8,cuda:10,current:[1,5,8,10,12],curv:[0,12,14,15],custom:8,cv2:10,dai:[14,15],data:[1,3,4,7,8,12,13,14,15],data_format:12,data_split_mod:[12,14,15],databas:7,datapoint:[0,7,12,14,15],datapoint_typ:12,dataset:[4,5,6,8,9,12],dataset_dir:[12,14,15],datatpoint:[14,15],datset:[14,15],debug:[2,11,12],debug_num_fil:12,decai:12,decay_r:12,decay_step_multipli:12,deepoptim:4,definit:12,denois:12,denot:12,depend:8,deploi:8,deploy:2,depth:[2,3,9,11,12,13,14,15],depth_grad_gaussian_sigma:[2,11],depth_grad_thresh:[2,11],depth_ims_tf_table_00000:[14,15],depth_sample_win_height:[2,11],depth_sample_win_width:11,depth_samples_per_grasp:[2,11],deriv:7,descent:[4,12],describ:[7,12],design:15,detail:[7,13,15],detect:11,determin:[2,3,12],determinist:[3,11],devel:10,develop:[10,13,15],deviat:1,dex:[7,8,9,14,15],dexter:[8,9],dict:[0,1,3,4,5,12],dictionari:[0,1,2,3,4,5,12,14,15],differ:[0,2,5,8,14,15],dimens:12,direct:2,directori:[0,1,4,10,11,12,13,14,15],directrori:12,disk:4,displai:[5,11,12],display_image_typ:12,dissemin:7,distanc:[2,11],distribut:[1,3,7],divers:[3,11],doc:10,docs_requir:10,document:[8,12],dof:[13,15],down:[8,12,15],download:[8,10,14,15],downsampl:[2,11],downsample_r:[2,11],dpi:12,draw:5,drop:12,dropout:12,dropout_poisson_mean:12,dropout_radius_scal:12,dropout_radius_shap:12,due:8,dure:[1,4,12,14,15],dynam:[14,15],each:[0,3,11,12],easi:2,edg:[2,11],edit:[8,14],edu:[6,8,13,15],eight:[7,14,15],either:12,elit:[3,11],elite_grasp:11,email:6,encapsul:3,encourag:8,end:12,endpoint:2,enforc:3,ensur:11,entir:12,entropi:[3,11,12,13,15],environ:10,epoch:[6,12,14,15],epsilon:3,errno:15,error:[0,4,6,12,14,15],error_r:0,etc:[4,14,15],euclidean:2,eval_frequ:12,eval_total_train_error:12,evalu:12,everi:[12,14,15],exampl:[8,10,12,14],except:3,execut:[3,7,11],experi:4,experiment_dir:4,extens:8,extra:10,facilit:[8,14,15],factor:[2,11,12],factori:2,fair:7,fals:[0,1,2,5,11,12,14,15],false_neg:12,false_posit:12,faster:11,favorit:[14,15],fc3:1,fc4:1,fc5:1,fcy:12,featur:[2,8],feature_vec:2,feed:[14,15],few:10,fifth:12,figur:[5,12],file:[0,4,8,10],filenam:[0,13,15],filter:[1,11,12,14,15],final_grasp:11,find:[12,14,15],fine:[1,8],fine_tun:12,fingertip:8,first:[2,12,13,14,15],fit:3,flag:[0,12,15],flota:11,folder:[10,14,15],follow:[10,12,13,14,15],font:[0,12],font_siz:[0,12],forc:2,format:[4,12],found:[1,3,6,7,10,14,15],fourth:12,fpr:0,fraction:11,frame:[2,11],frequenc:12,friction:[2,11],friction_coef:[2,11],from:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],from_feature_vec:2,full:[7,14,15],full_observ:3,fulli:[1,3,12],fully_observ:3,further:6,gamma:12,gamma_shap:12,gaussian:[1,11,12],gaussian_process_denois:12,gaussian_process_r:12,gaussian_process_scaling_factor:12,gaussian_process_sigma:12,geforc:[14,15],gener:[0,2,4,7,8,9,10,12,14,15],generalconst:8,geometri:[8,14,15],get:[0,1,10,14,15],get_im_mean:1,get_im_std:1,get_pose_mean:1,get_pose_std:1,get_tf_graph:[1,14,15],get_weight:1,gh_deploi:10,git:10,github:[8,10],given:[2,3,12,13,15],gmm:[3,11],gmm_component_frac:[3,11],gmm_refit_p:[3,11],gmm_reg_covar:3,gmm_reg_covat:11,gpu:[10,14,15],gqc:12,gqcnn:[0,2,3,4,5,10,11,12,13],gqcnn_config:[12,14,15],gqcnn_model:[3,11,13,15],gqcnn_prediction_visu:[14,15],gqcnn_training_perform:12,gqcnnanalyz:[8,14,15],gqcnnpredictionvisu:[8,14,15],gqcnnweight:1,gradient:[2,4,11,12],gradient_dropout:12,gradient_dropout_r:12,gradient_dropout_scal:12,gradient_dropout_shap:12,gradient_dropout_sigma:12,graph:1,grasp2d:[3,5,8],grasp:[0,1,3,4,5,6,7,8,9,10,11,12,14],grasp_approach_dir:2,grasp_axis_styl:5,grasp_axis_width:5,grasp_candid:11,grasp_center_s:5,grasp_center_styl:5,grasp_center_thick:5,grasp_plan:11,grasp_qual:[12,13,14,15],grasp_rank:11,grasp_sampl:[3,11],graspingpolici:8,grasps_to_tensor:3,grassp:3,grayscal:12,greater:11,greedi:3,gripper:[2,3,8,12,13,15],gripper_nam:3,gripper_width:[2,3,11],gripper_width_m:12,group:12,gtx:[14,15],guid:8,hand_poses_00000:[14,15],handl:3,hardwar:8,has:[8,10,13,14,15],have:[6,8,10,12,13,14,15],head:5,height:[2,11,12],help:[14,15],here:6,high:12,higher:8,highest:[3,13,15],hold:[4,9],holder:7,home:[12,13,14,15],hour:[14,15],how:[8,12],html:10,http:10,icra:[13,15],illustr:[13,15],im_channel:12,im_height:[1,12],im_mean:1,im_std:1,im_width:[1,12],imag:[1,2,3,4,5,7,8,9,10,11,12,13],image_arr:[1,3],image_dir:[11,13,15],image_dist:2,image_dropout:12,image_dropout_r:12,image_grasp_sampl:[2,3],image_mean:12,image_mod:12,image_std:12,image_wis:[14,15],imagefiletempl:8,imagegraspsampl:8,imagegraspsamplerfactori:8,imagemod:8,implement:[13,15],improv:6,imshow:5,inch:5,includ:[5,7,13,14,15],independ:11,index:8,indic:[0,12],individu:[12,14,15],inf:2,info:[9,13,15],init_mean_and_std:1,init_weights_fil:1,init_weights_gaussian:1,initi:[1,3,11,12,14,15],initialize_network:1,initiazl:1,inpaint:11,inpaint_rescale_factor:11,input:[1,3,4,9,12,13,15],input_data_mod:12,inputdatamod:8,instal:8,instanc:3,instanti:[1,14,15],instead:[14,15],instruct:10,intend:10,intent:10,interest:[2,10,13,15],intermedi:2,interpret:7,intrins:[2,3],introduc:8,involv:[13,15],ioerror:15,issu:8,iter:[3,7,11,12],its:12,jade:[13,15],jaw:[2,3,5,8,9,11,13,15],jaw_len:5,jaw_width:5,jeff:[6,8,11,12,13,15],jeff_work:15,jmahler:[6,8,13,15],just:[14,15],keep:11,keyword:5,kit:7,knowledg:7,known:10,kwarg:5,label:[0,5],label_vector:0,labels_list:0,larg:[6,7],larger:11,last:15,launch:[14,15],layer:[1,12,14,15],learn:[0,7,10,12,14,15],length:5,less:11,let:[14,15],level:15,licens:8,lift:9,like:[2,14,15],limit:12,line:[0,5,8,12,13,15],line_width:[0,5],link:15,list:[0,2,3,5,14,15],load:[0,1,12,14,15],local:[13,14,15],localhost:[14,15],locat:[2,7,12,14,15],log:[4,12,14,15],log_frequ:12,logit:12,longer:[8,11],look:[8,14,15],loss:[4,12,14,15],lower:[6,11],lowest:6,machin:0,made:12,magnitud:12,mahler:[6,8,11,12,13,15],mai:[7,14,15],main:15,make:[7,10],mani:[12,14,15],manner:10,manual:10,map:[0,13,15],marker:0,mask:3,master:10,match:12,matplotlib:[5,10],matrix:[0,3],max:[11,12],max_depth_offset:[2,11],max_dist_from_cent:[2,11],max_rejection_sampl:[2,11],max_training_examples_per_load:12,maxim:[13,15],maximum:[2,11,12],mayavi:5,mean:[1,11,12],memor:[14,15],messag:[14,15],meter:[2,3,11,12],method:[3,11,13,15],metric:[0,4,5,9,12,14,15],metric_nam:12,metric_thresh:12,million:7,min:[2,11],min_depth_offset:[2,11],min_dist_from_boundari:11,min_grasp_dist:[2,11],minibatch:[14,15],minimum:[2,11,12],minut:[14,15],mis:0,mispredict:0,mispredicted_indic:0,mission:7,mixtur:11,modal:4,mode:[4,12],model:[0,1,3,6,8,9,11,12,13,14,15],model_dir:[1,12,14,15],model_ewlohgukn:[13,14,15],model_filenam:1,model_xxxx:12,model_xxxxx:12,modif:6,modul:[5,8,12,15],momentum:12,momentum_r:12,monitor:[14,15],more:[5,7,9],morph_open_r:12,morph_poisson_mean:12,morpholog:12,most:15,much:5,multiclass:0,multiclass_label_vector:0,multipl:[12,13,14,15],multiple_object:[13,15],multiplicative_denois:12,must:12,name:[2,3,4,11,12],navig:[14,15],ndarrai:[0,2,3],necessari:10,need:5,neg:[5,12,14,15],net:[7,8,9,14,15],network:[1,3,4,6,7,8,9,11,12],neural:[1,3,4,8,9,12],neural_network:3,next:[14,15],noantipodalpairsfoundexcept:8,node:[1,13,15],nois:12,none:[0,2,3,4,7,12],normal:[1,2,12],notat:12,note:[2,3,4,8,10,12],novalidgraspsexcept:8,novel:[8,14,15],npz:[0,14,15],num_categori:0,num_datapoint:0,num_epoch:12,num_gmm_sampl:[3,11],num_grasp_sampl:3,num_it:[3,11],num_random_fil:12,num_sampl:2,num_seed_sampl:[3,11],num_tensor_channel:12,number:[0,2,3,6,11,12,14,15],numpi:[2,3,10],obj:[0,1,2],object:[0,1,2,3,4,5,7,9,12,13,14,15],object_wis:[12,14,15],observ:3,occasion:[14,15],occur:12,off:12,offlin:15,offset:[2,11],onc:[10,14,15],one:[12,14,15],onli:[8,10,12,13,14,15],open:[1,2,7,12,15],open_sess:1,opencv:10,oper:[0,14,15],opposit:2,optic:2,optim:[3,4,6,11,12,14,15],option:[0,3,12,14,15],orient:[14,15],origin:[7,13,15],other:[2,3,5,7,8,12,14,15],otherwis:[11,12],our:[6,7,8,10,13,15],out:[2,10,12,13,14,15],out_rat:12,outcom:7,outer:12,outlin:12,output:[1,9,12,13,14,15],output_dir:[12,14,15],output_s:12,over:12,overfit:[14,15],overlai:[13,15],overrid:3,overridden:12,overwrit:[14,15],overwritten:12,own:[11,13,15],pacakg:10,packag:14,page:[8,10],pair:[2,3,11],paper:[6,7,8,9,14,15],paradigm:15,parallel:[2,3,8,9,13,15],paralleljawgrasp:8,param:1,paramet:[0,1,2,3,4,5,8,13,14,15],part:[13,15],pass:11,path:[1,3,10,11,12,13,14,15],path_to_your_catkin_workspac:10,pc1:1,pcy:12,pdf:[14,15],per:[2,11,12],percentag:[3,11,12],percept:[2,3,5,10],perform:[4,6,8,11,14,15],phy:7,physic:[6,9,10],pillow:10,pip:10,pixel:[2,11,12],place:7,plan:[3,8,10,11],pleas:[6,8,12,13,14,15],plot:[0,5,12],plot_training_loss:[8,14,15],plugin:10,point:[2,3,5,9,13,14,15],poisson:12,polici:[8,13,15],pool:12,pose:[1,2,3,4,7,12,13,14,15],pose_arr:[1,3],pose_mean:[1,12],pose_std:[1,12],posit:[0,5,8,12,14,15],possibl:[7,12],potenti:11,pre:[2,4,7,11,12],precis:[0,5,11,14,15],precision_recal:[14,15],precision_recall_curv:0,pred_p_success:[14,15],pred_probs_list:0,predict:[0,1,3,5,8,9,12,13],predictions_list:0,prefetch:12,prepend:12,preproc_mod:12,preprocmod:8,present:7,pretrain:[7,8],prevent:[14,15],previou:[13,14,15],primens:8,print:[14,15],probabilit:0,probabl:[0,3,9,12,13,14,15],process:[4,12],progress:8,project:10,properti:12,provid:[2,14,15],push:10,put:0,pypi:8,pyplot:5,python:[1,8],q_valu:3,qualiti:[0,1,3,4,8,11,12],question:8,queue:[12,14,15],queue_capac:12,queue_sleep:12,quick:8,rad:2,radian:11,radiu:12,rais:8,random:[2,3,4,6,7,11,14,15],randomli:[12,14,15],rank:[3,11],rate:[0,4,6,12,14,15],read:[4,12,13,14,15],readm:12,recal:[0,5,14,15],receiv:0,recent:15,reciev:[14,15],recommend:[11,15],reduc:6,refer:[2,11,12],refit:[3,11],reflect:12,region:12,regress:[0,4,12],regressionresult:8,regular:[3,11,12],reinit_fc3:[1,12],reinit_fc4:[1,12],reinit_fc5:[1,12],reinit_pc1:[1,12],reinitialize_lay:1,reject:2,rel:[2,11,13,15],releas:7,render:8,repeat:3,replic:[8,13,15],repo:[10,13,14,15],repositori:[7,8,13,14,15],repres:0,represent:[3,7],request:8,requir:[2,3,10],resampl:3,research:[7,8],resiz:11,respect:0,rest:[14,15],restrict:7,result:0,rgb:[2,3,11],rgbd:[3,12,13,15],rgbd_im:[2,3],rgbdimag:[2,3],rgbdimagest:8,rigidtransform:2,rmsprop:12,robot:[6,8,10,12,13,15],robust:[3,11,12,14,15],roc:[0,14,15],roc_curv:0,root:[13,14,15],rotat:12,roughli:[14,15],rss:[6,14,15],rule:6,run:[8,14],runtim:11,same:[12,14,15],sampl:[2,3,11,12,14,15],sampler:[2,3],samples_per_object:12,satish:12,save:[0,4,5,11,12,14,15],save_frequ:12,savefig:5,scale:[5,11,12],scatter:5,scikit:10,scipi:10,score:0,scratch:[1,8,10],script:[7,8,12,14],scroll:15,search:[8,13,15],second:[2,12],section:12,see:[2,3,9,10,12,13,14,15],seed:[2,3,4,11],segmask:[2,3,12],segment:[2,3],select:3,self:15,sensor:[11,13,15],sequenc:[13,15],server:[14,15],servic:[8,13,15],session:1,set:[0,1,2,3,6,10,11,12],setup:[8,10,13],sever:[14,15],sgdoptim:[8,12,14,15],shake:9,shape:12,share:[13,15],should:[10,11,13,14,15],show:[2,5,12,14,15],show_axi:5,show_cent:5,show_filt:12,shuffl:12,side:5,sigma:[2,12],similar:[13,14,15],simpli:10,simplic:[14,15],sinc:[7,14,15],singl:[12,14,15],site:10,size:[0,1,3,5,11,12],skimag:10,sklearn:10,sleep:12,smaller:11,smooth:[2,11],softmax:[1,12],some:[14,15],someth:[14,15],sort:3,sourc:[8,10],space:[2,3,11,13,15],spars:12,specif:[4,5,8,10,12,13,15],specifi:[0,1,2,3,5,11,12,14,15],speed:11,sphinx:10,spirit:7,split:[6,12],split_typ:12,src:[10,15],stabl:[7,12,14,15],stable_pose_wis:[12,14,15],stai:12,standard:1,start:[8,14,15],stat:4,state:3,statist:4,std:1,step:[3,12,14,15],stochast:[4,12],store:[0,1,11,14,15],str:[0,1,3,4,5,11,12],string:[3,12,14,15],style:[0,5],sub:12,subdirectori:[14,15],subject:[6,7,8,13,15],submiss:6,subplot:5,substitut:10,success:[3,12,13,14,15],successfulli:9,suggest:10,sum:12,summari:[14,15],superior:6,support:[8,10,12,14,15],svm:12,symmetr:12,synth:[7,14,15],synthet:[7,9],tabl:[2,14,15],tag:12,take:[2,9,11,13,14,15],target:[10,12],target_metric_nam:12,templat:[4,13,14,15],tensor:[1,3,12],tensorboard_summari:[14,15],tensorflow:[1,10],term:8,termin:[13,14,15],test:[6,8,10,13,14,15],tf_imag:11,than:7,thei:7,them:[3,10,12,14,15],thi:[0,1,7,8,10,11,12,13,14,15],thick:5,third:12,three:[14,15],threshold:[0,2,11,12],through:[10,12,13,14,15],thu:12,time:[12,14,15],timeout:4,titl:[5,12],toggl:[14,15],took:[14,15],tool:[0,4,5,7,8,14,15],top:[0,3,15],top_k_error_r:0,top_k_predict:0,topic:[13,15],total:12,total_pct:12,toward:8,tpr:0,traceback:15,train:[0,3,6,7,8,9,10,13],train_batch_s:12,train_config:[14,15],train_l2_regular:12,train_pct:12,training_mod:12,trainingmod:8,trainstatslogg:8,transform:[2,11],transport:9,true_neg:12,true_posit:12,tune:[1,8],tupl:5,turn:12,tutori:[8,10,13,14,15],two:[14,15],txt:10,type:[0,1,2,3,5,11,12],ubuntu:[8,13,15],under:[0,8,13,14,15],underneath:12,understand:7,univers:7,unrestrict:7,unzip:[14,15],updat:[0,1,4,12,13,15],update_batch_s:1,update_conv0_onli:12,update_fc_onli:12,update_im_mean:1,update_im_std:1,update_pose_mean:1,update_pose_std:1,upload:7,use:[0,1,2,4,7,8,10,11,12,13,14,15],used:[1,2,3,8,11,12],useful:[14,15],user:[10,12,13,14,15],uses:[13,14,15],using:[0,1,3,4,5,6,8,10,11,12,13,14,15],vairou:12,val_batch_s:12,val_pct:12,valid:[0,3,6,7,12,14,15],valu:[0,3,4,12],varianc:11,variou:[0,4,6,12,14,15],vector:[0,2,11],via:11,view:[5,14,15],viewpoint:8,virtual_primesens:11,vis:11,vis_conv:12,vis_frequ:12,vishal:12,visual:[2,8,12],visualization_config:[14,15],visualize_predict:[8,14,15],wai:[14,15],walk:[13,14,15],web:[10,14,15],websit:[8,10],weight:[1,2,7,9,11,12,14,15],were:6,what:[7,8,12],when:[1,3,4,10,11,12,14,15],where:[1,2,12,14,15],whether:[0,1,2,3,5,12],which:[0,10,11,12,13,14,15],who:10,whose:12,width:[0,2,3,5,11,12],width_px:2,window:[2,5,11,14,15],wise:[7,12],wish:10,without:7,work:[7,8,10],workshop:[13,15],workspac:[10,15],wrap:2,wrapper:[0,1,2,3],written:12,x32x32x1:[14,15],xlabel:5,xxxxx:12,yaml:[13,14,15],yaml_config:15,yamlconfig:[2,14,15],ylabel:5,you:[6,8,10,13,14,15],your:[10,11,12,13,14,15],yumi:[6,7,8,13,15],zoo:6},titles:["Analysis","GQCNN","Grasping","Policy","Training","Visualization","Dex-Net 2.0","Download Link","Berkeley AUTOLAB\u2019s GQCNN Package","What are GQ-CNNs?","Dependencies","Examples","Tools","Grasp Planning","Training","Overview"],titleterms:{"import":[14,15],ROS:[10,13,15],Use:8,academ:8,analysi:[0,12,14,15],antipodaldepthimagegraspsampl:2,antipodalgraspingpolici:3,author:[11,12],autolab:8,berkelei:8,berkeleyautom:10,build:10,catkin:10,classificationresult:0,clone:10,cnn:9,configur:[11,12,13,14,15],confusionmatrix:0,crossentropyantipodalgraspingpolici:3,dataset:[7,14,15],depend:10,deploi:10,develop:8,dex:6,document:10,download:7,edit:[13,15],exampl:[11,13,15],file:[11,12,13,14,15],fine:[12,14,15],from:[14,15],generalconst:4,goal:8,gqcnn:[1,8,14,15],gqcnnanalyz:0,gqcnnpredictionvisu:5,grasp2d:2,grasp:[2,13,15],graspingpolici:3,guid:10,imag:[14,15],imagefiletempl:4,imagegraspsampl:2,imagegraspsamplerfactori:2,imagemod:4,indic:8,inputdatamod:4,instal:10,licens:7,link:[7,8],model:7,net:6,network:[14,15],noantipodalpairsfoundexcept:3,novalidgraspsexcept:3,overview:[8,15],packag:[8,10,13,15],paralleljawgrasp:3,paramet:[11,12],plan:[13,15],plot:[14,15],plot_training_loss:12,polici:[3,11],predict:[14,15],preprocmod:4,progress:[14,15],project:8,pypi:10,python:[10,13,14,15],quick:10,regressionresult:0,repositori:10,requir:[8,12],result:[14,15],rgbdimagest:3,run:[10,13,15],scratch:[14,15],script:[10,13,15],setup:[14,15],sgdoptim:4,split:[14,15],start:10,system:8,tabl:8,tensorboard:[14,15],tool:12,train:[4,12,14,15],trainingmod:4,trainstatslogg:4,tune:[12,14,15],visual:[5,14,15],visualize_predict:12,what:9,wise:[14,15],yaml:[11,12]}})
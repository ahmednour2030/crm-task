(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f7200a0"],{"8ffa":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-card",{ref:"cardAction",attrs:{title:"كافة القاعات"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-table",{attrs:{id:"my-table","per-page":e.perPage,"current-page":e.currentPage,"head-variant":"",hover:"",responsive:"",items:e.getCompanies,fields:e.fields,bordered:""},scopedSlots:e._u([{key:"head()",fn:function(t){return[a("span",{staticClass:"text-primary",staticStyle:{"font-size":"18px"}},[e._v(e._s(t.label))])]}},{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-dark my-2"},[a("b-spinner",{staticClass:"align-middle"}),a("strong",[e._v(" Loading... ")])],1)]},proxy:!0},{key:"cell(id)",fn:function(t){return[e._v(" "+e._s(t.item.id)+" ")]}},{key:"cell(name)",fn:function(t){return[e._v(" "+e._s(t.item.user.name)+" ")]}},{key:"cell(phone)",fn:function(t){return[e._v(" "+e._s(t.item.user.phone)+" ")]}},{key:"cell(email)",fn:function(t){return[e._v(" "+e._s(t.item.user.email)+" ")]}},{key:"cell(category)",fn:function(t){return[e._v(" "+e._s(t.item.category?t.item.category.name:"")+" ")]}},{key:"cell(rate)",fn:function(t){return[a("b-form-rating",{attrs:{readonly:""},model:{value:t.item.user.rate,callback:function(a){e.$set(t.item.user,"rate",a)},expression:"row.item.user.rate"}})]}},{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"warning"},on:{click:function(a){return e.confirmRefuse(t.item.user.id)}}},[e._v(" الغاء التفعيل ")]),a("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"primary"},on:{click:function(a){return e.showDetails(t.item)}}},[e._v(" تفاصيل ")]),a("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(a){return e.confirmDelete(t.item.user.id)}}},[e._v(" حذف ")])]}}])})],1)],1),a("div",{staticClass:"mt-3"},[a("b-pagination",{attrs:{"total-rows":e.rows,align:"left","per-page":e.perPage,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1),a("company-details",{attrs:{obj:e.obj}})],1)},n=[],o=a("205f"),s=a("a15b"),l=a("b28b"),i=a("29a1"),c=a("1947"),u=a("26d2"),d=a("db6c"),m=a("c074"),b=a("ecee"),f=a("a55a");b["c"].add(m["a"],m["c"],m["b"]);var p={name:"ActiveCompanies",components:{BCard:o["a"],BRow:s["a"],BCol:l["a"],BTable:i["a"],BButton:c["a"],BPagination:u["a"],CompanyDetails:f["a"],BFormRating:d["a"]},data:function(){return{perPage:6,currentPage:1,add:!0,busy:!0,file:null,obj:{},fields:[{key:"id",label:"م"},{key:"name",label:"الاسم"},{key:"phone",label:"التليفون"},{key:"email",label:"الايميل"},{key:"category",label:"التصنيف"},{key:"rate",label:"التقييم"},{key:"actions",label:"العمليات"}]}},computed:{rows:function(){return this.getCompanies.length},getCompanies:function(){return this.$store.state.company.usersActive}},created:function(){this.$store.dispatch("company/fetchActiveWedding")},methods:{confirmRefuse:function(e){var t=this;this.$swal({title:"عملية الغاء التفعيل",text:"تم الغاء تفعيل هذا الشخص بنجاح",icon:"question",showCancelButton:!0,confirmButtonText:"موافق",cancelButtonText:"الغاء",customClass:{confirmButton:"btn btn-warning",cancelButton:"btn btn-outline-primary ml-1"},buttonsStyling:!1}).then((function(a){if(a.value){t.$swal({icon:"warning",title:"عملية الغاء التفعيل",text:"سوف يتم الغاء تفعيل هذا المستخدم",customClass:{confirmButton:"btn btn-success"}});var r={user_id:e,status:"0"};t.$store.dispatch("company/inActive",r).then((function(){}))}}))},confirmDelete:function(e){var t=this;this.$swal({title:"حذف الشخص",text:"هل تريد حذف هذا الشخص",icon:"question",showCancelButton:!0,confirmButtonText:"موافق",cancelButtonText:"الغاء",customClass:{confirmButton:"btn btn-danger",cancelButton:"btn btn-outline-primary ml-1"},buttonsStyling:!1}).then((function(a){a.value&&(t.$swal({icon:"success",title:"عملية حذف",text:"تم تفعيل هذا الشخص بنجاح!",customClass:{confirmButton:"btn btn-success"}}),t.$store.dispatch("company/deleteActive",e).then((function(){})))}))},showDetails:function(e){this.obj=e,this.$bvModal.show("companyDetails")}}},_=p,g=a("2877"),y=Object(g["a"])(_,r,n,!1,null,"333befc5",null);t["default"]=y.exports},a55a:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{id:"companyDetails","cancel-variant":"outline-secondary",centered:"",size:"l",title:"تفاصيل"}},[a("validation-observer",{ref:"simpleRules"},[a("b-form",[a("b-row",[a("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[a("h5",{staticClass:"mb-0"},[e._v(" بيانات قاعة الافراح ")])]),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"الموقع االالكتروني","label-for":"website"}},[a("validation-provider",{attrs:{name:"website",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"website",placeholder:"الموقع الالكتروني",state:!(r.length>0)&&null},model:{value:e.obj.website,callback:function(t){e.$set(e.obj,"website",t)},expression:"obj.website"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"اسم التصنيف","label-for":"country"}},[a("validation-provider",{attrs:{name:"country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-select",{attrs:{id:"country",placeholder:"اختار التصنيف","value-field":"id","text-field":"name",options:e.categoryOption,state:!(r.length>0)&&null},model:{value:e.obj.category_id,callback:function(t){e.$set(e.obj,"category_id",t)},expression:"obj.category_id"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"اسم المحافظة","label-for":"country"}},[a("validation-provider",{attrs:{name:"country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-select",{attrs:{id:"country",placeholder:"اختار المحافظة","value-field":"id","text-field":"name",options:e.countryOptions,state:!(r.length>0)&&null},on:{change:e.changeGov},model:{value:e.obj.user.country_id,callback:function(t){e.$set(e.obj.user,"country_id",t)},expression:"obj.user.country_id"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"اسم المدينة","label-for":"city"}},[a("validation-provider",{attrs:{name:"city",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-select",{attrs:{id:"city",placeholder:"اختار المدينة","value-field":"id","text-field":"name",options:e.cityOptions,state:!(r.length>0)&&null},model:{value:e.obj.user.city_id,callback:function(t){e.$set(e.obj.user,"city_id",t)},expression:"obj.user.city_id"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"رقم الهاتف المباشر","label-for":"landline_number"}},[a("validation-provider",{attrs:{name:"landline_number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"landline_number",state:!(r.length>0)&&null,placeholder:"رقم الهاتف المباشر"},model:{value:e.obj.landline_number,callback:function(t){e.$set(e.obj,"landline_number",t)},expression:"obj.landline_number"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"اسم الموظف المباشر","label-for":"direct_employee_name"}},[a("validation-provider",{attrs:{name:"direct_employee_name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"direct_employee_name",placeholder:"اسم الموظف المباشر",state:!(r.length>0)&&null},model:{value:e.obj.direct_employee_name,callback:function(t){e.$set(e.obj,"direct_employee_name",t)},expression:"obj.direct_employee_name"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"رقم هاتف الموظف المباشر","label-for":"direct_employee_phone"}},[a("validation-provider",{attrs:{name:"direct_employee_phone",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"direct_employee_phone",placeholder:"رقم هاتف الموظف المباشر",state:!(r.length>0)&&null},model:{value:e.obj.direct_employee_phone,callback:function(t){e.$set(e.obj,"direct_employee_phone",t)},expression:"obj.direct_employee_phone"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"سجل قاعة الافراح","label-for":"factory_register"}},[a("validation-provider",{attrs:{name:"factory_register",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"factory_register",state:!(r.length>0)&&null,placeholder:"سجل قاعة الافراح"},model:{value:e.obj.commercial_register,callback:function(t){e.$set(e.obj,"commercial_register",t)},expression:"obj.commercial_register"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"صورة سجل قاعة الافراح","label-for":"factory_register_image"}},[a("validation-provider",{attrs:{name:"factory_register_image",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-file",{attrs:{id:"factory_register_image",type:"image",state:!(r.length>0)&&null,placeholder:"صورة سجل قاعة الافراح"},on:{change:e.fileFactory},model:{value:e.obj.factory_register_image,callback:function(t){e.$set(e.obj,"factory_register_image",t)},expression:"obj.factory_register_image"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"صورة سجل قاعة الافراح","label-for":"letter_image"}},[a("validation-provider",{attrs:{name:"letter_image",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-file",{attrs:{id:"letter_image",state:!(r.length>0)&&null,placeholder:"صورة خطاب قاعة الافراح"},on:{change:e.fileLetter},model:{value:e.obj.letter_image,callback:function(t){e.$set(e.obj,"letter_image",t)},expression:"obj.letter_image"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"العنوان","label-for":"address"}},[a("validation-provider",{attrs:{name:"address",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"address",state:!(r.length>0)&&null,placeholder:"العنوان"},model:{value:e.obj.address,callback:function(t){e.$set(e.obj,"address",t)},expression:"obj.address"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1)],1)],1)],1)],1)},n=[],o=a("7bb1"),s=a("8f03"),l=a("a15b"),i=a("b28b"),c=a("8361"),u=a("c43f"),d=a("11de"),m=a("8226"),b=a("4797"),f=a("6aac"),p=a("223c"),_={ar:{names:{name:"اسم التصنيف",type:"نوع التصنيف",image:"صورة التصنيف"}}};Object(o["d"])("ar",_.ar);var g={name:"CompanyDetails",components:{ValidationProvider:o["b"],ValidationObserver:o["a"],BRow:l["a"],BCol:i["a"],BFormSelect:c["a"],BFormFile:u["a"],BForm:d["a"],BFormGroup:m["a"],BFormInput:b["a"],BModal:f["a"],ToastificationContent:p["a"]},props:{obj:{type:Object,default:function(){}}},data:function(){return{dataId:"",dataName:"",dataType:"",dataImage:"",dataColor:"",dataStatus:"",statuses:[{id:1,name:"أعمال حره"},{id:2,name:"شركة"},{id:3,name:"الكل"}],typeOptions:[{id:1,name:"تطبيق"},{id:1,name:"لوحة تحكم"}],countryOptions:[],categoryOption:[],category_file:null,required:s["b"]}},created:function(){var e=this;this.$store.dispatch("common/FETCH_GOV").then((function(t){e.countryOptions=t.data.data.governorates})),this.$store.dispatch("categories/fetch").then((function(t){e.categoryOption=t.data.data}))},methods:{update:function(){var e=this,t=new FormData;t.append("id",this.dataId),t.append("category_id",this.dataId),t.append("name",this.dataName),t.append("status",this.dataStatus),t.append("type",this.dataType),this.dataImage.type!==String&&t.append("image",this.dataImage),t.append("color",this.dataColor),this.$store.dispatch("categories/edit",t).then((function(){e.$toast({component:p["a"],props:{title:"تم تعديل التصنيف بنجاح",icon:"CheckCircleIcon",variant:"success"}})}))},fileCategory:function(e){this.dataImage=e.target.files[0]}}},y=g,v=a("2877"),h=Object(v["a"])(y,r,n,!1,null,"4fb428b2",null);t["a"]=h.exports}}]);
//# sourceMappingURL=chunk-2f7200a0.c7e34bff.js.map
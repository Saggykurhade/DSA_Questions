const nums1 = [1,2,2,1];
const nums2 = [2,2];

function instersection(nums1, nums2) {
    let arr=[]
  let obj={};
  for(let i=0;i<nums1.length;i++) {
      if(obj[nums1[i]]==undefined) {
          obj[nums1[i]]=1;
      }
  }
  // console.log(obj)

  for(let i=0;i<nums2.length;i++) {
      if(obj[nums2[i]]==1) {
          arr.push(nums2[i])
        // console.log(arr)
          
obj[nums2[i]]=0;
         
      }
  }
return arr
};

console.log(instersection(nums1, nums2))
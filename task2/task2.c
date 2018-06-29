#include <stdio.h>
#include <stdlib.h>
struct node // doubly LinkedList Node
{
   int data;
   struct node *left,*right;
};
 
void level_order_traversal(struct node *root);
int get_height(struct node *root);
void print_level(struct node *root,int level);
 
int main()
{
                                 
   struct node *root,*temp;
 //  Creating doubly linked list for traversing binary tree
   temp=(struct node*)malloc(sizeof(struct node));
   temp->data=1;
   root=temp;

   temp->left=(struct node*)malloc(sizeof(struct node));
   temp->left->data=2;
   temp->left->left=(struct node*)malloc(sizeof(struct node));
   temp->left->left->data=4;
   temp->left->left->left=temp->left->left->right=NULL;
   temp->left->right=(struct node*)malloc(sizeof(struct node));
   temp->left->right->data=5;
   temp->left->right->left=temp->left->right->right=NULL;
 
   temp->right=(struct node*)malloc(sizeof(struct node));
   temp->right->data=3;
   temp->right->left=temp->right->right=NULL;
   
   printf("\nThe level order traversal of this binary tree is: \n\n");
 
   level_order_traversal(root);
      return 0;
}
void level_order_traversal(struct node *root)
{
   int h,i;
   h = height(root);
   for(i=1;i<=h;i++)
   {
        print_level(root,i);
   }
}
void print_level(struct node *root,int level)
{
   if(root==NULL)
   {
       return;
   }
   if(level==1)
   {
        printf("%d ",root->data);
   }
   else if(level>1)
   {
          print_level(root->left,level-1);
          print_level(root->right,level-1);
   }
}
int height(struct node *root)
{
   int right_height,left_height;
   if(root==NULL)
   {
       return 0;
   }
   left_height=height(root->left);
   right_height=height(root->right);
   if(left_height>right_height)
   {
        return left_height+1;
   }
   else
   {
        return right_height+1;
   }
}

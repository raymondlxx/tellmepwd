namespace TellmePWD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddGroupModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Groups",
                c => new
                    {
                        ID = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        CreateTime = c.DateTime(nullable: false),
                        UpdateTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("dbo.Websites", "GroupID", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Websites", "GroupID");
            DropTable("dbo.Groups");
        }
    }
}

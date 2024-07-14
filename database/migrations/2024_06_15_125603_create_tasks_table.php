<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->date('deadline');
            $table->unsignedBigInteger('creator');
            $table->foreign('creator')->references('id')->on('users');
            $table->unsignedBigInteger('assignee');
            $table->boolean('status');
            $table->string('priority')->nullable();
            $table->foreign('assignee')->references('id')->on('users');
            $table->unsignedBigInteger('workspace')->nullable();
            $table->foreign('workspace')->references('id')->on('workspaces');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
